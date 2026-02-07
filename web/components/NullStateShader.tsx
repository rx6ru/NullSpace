"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useTheme } from "next-themes";

export default function NullStateShader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();
    const themeRef = useRef(resolvedTheme); // Ref to access latest theme in animation loop without re-binding

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Uniforms
        // Initial Colors based on current theme
        const isDark = themeRef.current === "dark";
        // Light Mode: BG is "Dim Dark" (0.5), Fog is "Light" (0.95)
        const initialBg = isDark ? new THREE.Color(0.02, 0.02, 0.02) : new THREE.Color(0.1, 0.1, 0.1);
        const initialFog = isDark ? new THREE.Color(0.5, 0.5, 0.5) : new THREE.Color(1, 1, 1);

        const uniforms = {
            u_time: { value: 0 },
            u_resolution: { value: new THREE.Vector2(width, height) },
            u_bg_color: { value: initialBg },
            u_fog_color: { value: initialFog },
        };

        // Shader
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float u_time;
                uniform vec2 u_resolution;
                uniform vec3 u_bg_color;
                uniform vec3 u_fog_color;

                // Simplex noise function
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                                        -0.577350269189626, // -1.0 + 2.0 * C.x
                                        0.024390243902439); // 1.0 / 41.0
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod289(i);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                        + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ;
                    m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    
                    // Slow moving noise
                    float t = u_time * 0.15;
                    float n1 = snoise(st * 2.0 + t);
                    float n2 = snoise(st * 4.0 - t * 0.5);
                    float n3 = snoise(st * 8.0 + t * 0.2);
                    
                    // Layered noise for "fog" effect
                    float noise = n1 * 0.5 + n2 * 0.25 + n3 * 0.125;
                    
                    // Remap noise to 0-1 range roughly
                    noise = noise * 0.5 + 0.5;
                    
                    // Dark, moody gradient - tuned for subtle visibility
                    // vec3 color1 = vec3(0.5, 0.5, 0.5); // Subtle grey with slight blue
                    // vec3 color2 = vec3(0.02, 0.02, 0.02);  // Near-void black
                    
                    vec3 color1 = u_fog_color;
                    vec3 color2 = u_bg_color;
                    
                    // Add some subtle variation
                    float mask = smoothstep(0.2, 0.8, noise);
                    vec3 finalColor = mix(color2, color1, mask);
                    
                    // Vignette to keep focus center/top - softened
                    float vignette = distance(st, vec2(0.5, 0.5));
                    finalColor *= 1.0 - vignette * 0.5;

                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `,
        });

        const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(plane);

        // Animation Loop
        let animationId: number;
        const animate = (time: number) => {
            uniforms.u_time.value = time * 0.001;

            // Smoothly interpolate colors based on theme
            // We use the ref here to check the current desired state
            const targetBg = themeRef.current === "dark"
                ? new THREE.Color(0.02, 0.02, 0.02)
                : new THREE.Color(0.5, 0.5, 0.5);

            const targetFog = themeRef.current === "dark"
                ? new THREE.Color(0.5, 0.5, 0.5)
                : new THREE.Color(0.95, 0.95, 0.95);

            // Simple lerp for smooth transition (0.05 factor)
            uniforms.u_bg_color.value.lerp(targetBg, 0.05);
            uniforms.u_fog_color.value.lerp(targetFog, 0.05);

            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);

        // Resize handler
        const handleResize = () => {
            if (!containerRef.current) return;
            const newWidth = containerRef.current.clientWidth;
            const newHeight = containerRef.current.clientHeight;
            renderer.setSize(newWidth, newHeight);
            uniforms.u_resolution.value.set(newWidth, newHeight);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            material.dispose();
            // plane.geometry.dispose(); // PlaneGeometry is created once, can be disposed if needed but usually fine
        };
    }, []);

    // Keep theme ref updated
    useEffect(() => {
        themeRef.current = resolvedTheme;
    }, [resolvedTheme]);

    return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000" />;
}
