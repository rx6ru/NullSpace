import { Inter, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { generateStructuredData } from "@/lib/structured-data";
import Providers from "@/components/Providers";
import { SmoothScroll } from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import TechnicalOverlay from "@/components/TechnicalOverlay";
import BackToTop from "@/components/BackToTop";

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
    title: "Amar Mahato | Software, Backend & Applied AI Engineer",
    description: "Code as Architecture.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${spaceMono.variable} antialiased bg-void text-monolith selection:bg-neon/30 selection:text-neon transition-colors duration-300`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateStructuredData()),
                    }}
                />
                <Providers>
                    <Preloader />
                    <TechnicalOverlay />
                    <CustomCursor />
                    <ScrollToTop />
                    <BackToTop />
                    <ScrollProgress />
                    <SmoothScroll>
                        <NoiseOverlay />
                        {children}
                    </SmoothScroll>
                </Providers>
            </body>
        </html>
    );
}
