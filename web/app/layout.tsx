import { Inter, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SmoothScroll } from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
    display: "swap",
});

export const metadata = {
    title: "Rxbru | Portfolio",
    description: "Code as Architecture.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrains.variable} ${spaceMono.variable} bg-void text-monolith font-sans antialiased`}
            >
                <Preloader />
                <ScrollToTop />
                <ScrollProgress />
                <SmoothScroll>
                    <CustomCursor />
                    {children}
                    <NoiseOverlay />
                </SmoothScroll>
            </body>
        </html>
    );
}
