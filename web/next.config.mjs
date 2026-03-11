/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    experimental: {
        // reactCompiler: true, // Optional: verify if supported
    }
};

export default nextConfig;
