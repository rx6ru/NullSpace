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
    type: "EXTENSION" | "BACKEND" | "ANDROID" | "WEB_APP" | "AGENT" | "CLI" | "MCP";
}

export const PROJECTS: Project[] = [
    {
        id: "concize",
        pid: "PID_2048",
        name: "CONCIZE",
        type: "EXTENSION",
        description: "A Chrome Extension meeting assistant pipeline.",
        features: [
            "Real-time audio capture via Chrome Extension",
            "Event-driven microservices pipeline decoupling ingestion from AI workloads (RabbitMQ)",
            "Hybrid LLM chunking: Sarvam AI bulk transcription + Cerebras/Groq speaker-aware narrative synthesis",
            "Gemini embeddings upserted into Qdrant for semantic meeting retrieval",
            "x-audio-offset header strategy for global timeline synchronization across async chunks"
        ],
        stack: ["CHROME EXTENSION", "EXPRESS", "RABBITMQ", "GROQ SDK", "SARVAM AI", "GEMINI", "QDRANT", "MONGODB"],
        details: "A Chrome Extension meeting assistant that captures live audio and streams it to a backend microservices pipeline. RabbitMQ decouples audio ingestion from heavy AI workloads. Each chunk is transcribed via Sarvam AI or Groq Whisper, split by speaker and pause into micro-chunks, cleaned into third-person narratives by Cerebras/Groq, then embedded with Gemini and stored in Qdrant — enabling semantic search and conversational retrieval over the entire meeting.",
        github: "https://github.com/rx6ru/Concize",
    },
    {
        id: "trecl",
        pid: "PID_4192",
        name: "TRECL",
        type: "AGENT",
        description: "A multi-agent job research tool built with LangGraph.",
        features: [
            "6-agent stateful DAG with parallel fan-out/fan-in (LangGraph)",
            "Agentic RAG pipeline: Tavily scrape → Qdrant index → LLM synthesis",
            "ReAct sub-graph GitHub analyst with 7 tools and 4-layer hallucination guardrails",
            "Human-in-the-loop graph interrupt for target selection",
            "Per-target cold email generation with pain-point analysis"
        ],
        stack: ["PYTHON", "LANGGRAPH", "QDRANT", "GEMINI", "CEREBRAS", "PYGITHUB", "TAVILY", "PYDANTIC"],
        details: "A multi-agent job research tool built with LangGraph. Given a company name, a data ingester scrapes 8 targeted web sources via Tavily, embeds the results into Qdrant, and synthesizes a structured company summary. A job decoder and GitHub analyst then run in parallel — the GitHub analyst is a compiled ReAct sub-graph with 7 tools and stateful guardrails that prevent the LLM from querying repos or labels it hasn't actually discovered. An opportunity curator filters results against the user's anti-persona and ranks them into 3 tiers. The graph pauses for human target selection, then a pain synthesizer queries Qdrant for deeper technical context before a writer generates tailored cold outreach emails.",
        github: "https://github.com/rx6ru/Trecl"
    },
    {
        id: "wombat",
        pid: "PID_8080",
        name: "WOMBAT",
        type: "BACKEND",
        description: "Secure API vault and proxy management system.",
        features: [
            "Centralized credential vault with granular proxy API generation",
            "Google Cloud KMS envelope encryption at application layer before DB storage",
            "Go proxy service intercepting API traffic for rate-limiting and usage metering",
            "Zero-exposure master key architecture"
        ],
        stack: ["NEXT.JS", "EXPRESS", "GO", "GOOGLE KMS", "SUPABASE", "PRISMA"],
        details: "A secrets management platform that lets teams create scoped proxy APIs to share service credentials without exposing master keys. Backend built with Express and Prisma; security enforced through Google Cloud KMS envelope encryption applied before database storage. A Go proxy service intercepts API traffic for granular rate-limiting and usage metering, with SDK wrappers for multi-provider integration. Includes JWT authentication, role-based access control, and Zod-validated API contracts.",
        github: "https://github.com/rx6ru/wombat",
    },
    {
        id: "headless-ghidra",
        pid: "PID_7734",
        name: "HEADLESS GHIDRA MCP",
        type: "MCP",
        description: "An MCP server for automated Ghidra binary analysis by LLMs.",
        features: [
            "Cross-platform MCP server exposing Ghidra's analysis to LLMs without the GUI",
            "Python–Java bridge via custom headless Ghidra script serializing functions, strings, imports, and cross-references",
            "High-speed native binary inspection using Capstone disassembly and PE/ELF parsing",
            "60-test automated suite with full Windows/Linux compatibility"
        ],
        stack: ["PYTHON", "JAVA", "GHIDRA", "MCP", "CAPSTONE", "PEFILE"],
        details: "An MCP server that lets LLMs perform automated binary analysis, decompilation, call-graph traversal, and malware triage through Ghidra without its GUI. A Python–Java bridge runs a custom Ghidra headless script that serializes analysis results into cached JSON, enabling stateless reuse across sessions. Complemented by native inspection tools using Capstone and PE/ELF parsing for sub-second triage. Production-hardened with LRU session caching, hybrid streaming for large binaries, and path-traversal security.",
        github: "https://github.com/rx6ru/headless-ghidra-mcp"
    },
    {
        id: "edvo",
        pid: "PID_1934",
        name: "EDVO",
        type: "ANDROID",
        description: "Local-first cross-platform security app built with Kotlin Multiplatform.",
        features: [
            "Zero-knowledge architecture — no plaintext data ever leaves the device",
            "Local SQLDelight encryption for all on-device storage",
            "Kotlin Multiplatform core",
            "Offline-first sync transmitting only encrypted blobs"
        ],
        stack: ["KOTLIN", "JETPACK COMPOSE", "SQLDELIGHT", "KTOR"],
        details: "A security-focused Android application built with Kotlin where all encryption and data storage happens locally. Uses SQLDelight for encrypted on-device persistence, ensuring zero-knowledge privacy by design. Built on a Kotlin Multiplatform core with a Jetpack Compose UI and an offline-first sync model that only transmits encrypted blobs externally.",
        github: "https://github.com/rx6ru/EDVO",
    },
    {
        id: "w2chat",
        pid: "PID_3000",
        name: "W2CHAT",
        type: "WEB_APP",
        description: "Real-time MERN stack chat application with secure JWT auth.",
        features: [
            "Bidirectional Socket.IO events",
            "JWT authentication",
            "Persistent MongoDB message history",
            "Responsive React UI"
        ],
        stack: ["MERN STACK", "SOCKET.IO", "JWT", "REACT"],
        details: "A real-time chat application built on the MERN stack with secure JWT-based authentication, persistent message history in MongoDB, and bidirectional communication via Socket.IO. Clean, responsive React interface with real-time message delivery.",
        github: "https://github.com/rx6ru/W2Chat",
    }
];
