export interface Project {
    id: string;
    pid: string; // Process ID style (e.g., "PID_8823")
    name: string;
    description: string;
    stack: string[];
    details: string;
    features: string[]; // Bullet points for the "Architecture" section
    github?: string;
    live?: string;
    type: "EXTENSION" | "BACKEND" | "ANDROID" | "WEB_APP";
}

export const PROJECTS: Project[] = [
    {
        id: "concize",
        pid: "PID_2048",
        name: "CONCIZE",
        type: "EXTENSION",
        description: "Chrome Extension meeting assistant pipeline.",
        features: [
            "Real-time audio capture",
            "Async RabbitMQ processing pipeline",
            "Groq-powered transcription",
            "Vector-based semantic search (Qdrant)"
        ],
        stack: ["CHROME EXTENSION", "EXPRESS", "RABBITMQ", "GROQ SDK", "QDRANT"],
        details: "Browser extension for capturing meeting audio. Uses an async microservices pipeline (RabbitMQ) to chunk audio, generating transcripts via Groq and semantic embeddings for Qdrant-powered chat and query.",
        github: "https://github.com/rx6ru/Concize",
    },
    {
        id: "wombat",
        pid: "PID_8080",
        name: "WOMBAT",
        type: "BACKEND",
        description: "Secure API vault and proxy management system.",
        features: [
            "Centralized credential vault",
            "Granular proxy API generation",
            "Rate-limiting via Upstash",
            "Zero-exposure master key architecture"
        ],
        stack: ["NEXT.JS 16", "SUPABASE", "PRISMA", "EXPRESS", "UPSTASH"],
        details: "A centralized credential management platform that allows creating granular proxy APIs to share access without exposing master keys. Backend powered by Express & Prisma with Upstash for high-performance rate limiting.",
        github: "https://github.com/rx6ru/wombat",
    },
    {
        id: "edvo",
        pid: "PID_1934",
        name: "EDVO",
        type: "ANDROID",
        description: "Local-first Android security application.",
        features: [
            "Zero-knowledge architecture",
            "Local SQLDelight encryption",
            "Kotlin Multiplatform core",
            "Offline-first sync capability"
        ],
        stack: ["KOTLIN", "JETPACK COMPOSE", "SQLDELIGHT", "KTOR"],
        details: "Security-focused Android application built with Kotlin. Ensures zero-knowledge privacy by performing all encryption and data storage locally using SQLDelight, syncing only encrypted blobs.",
        github: "https://github.com/rx6ru/EDVO",
    },
    {
        id: "w2chat",
        pid: "PID_3000",
        name: "W2CHAT",
        type: "WEB_APP",
        description: "Real-time MERN stack chat application.",
        features: [
            "Bidirectional Socket.IO events",
            "JWT Authentication",
            "Persistent MongoDB message history",
            "Responsive React UI"
        ],
        stack: ["MERN STACK", "SOCKET.IO", "JWT", "REACT"],
        details: "Instant bidirectional communication platform. Features secure JWT authentication, persistent message history, and a responsive React interface with real-time socket events.",
        github: "https://github.com/rx6ru/W2Chat",
    }
];
