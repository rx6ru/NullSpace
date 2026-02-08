import { Server, BrainCircuit, Database, Cpu, Globe, LockKeyhole } from "lucide-react";

export const LANGUAGES = [
    { name: "TypeScript", level: "Expert" },
    { name: "Python", level: "Expert" },
    { name: "Go", level: "Advanced" },
    { name: "Rust", level: "Intermediate" },
    { name: "Solidity", level: "Intermediate" },
    { name: "SQL", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
];

export const DOMAINS = [
    {
        id: "backend",
        title: "Backend & API Design",
        icon: Server,
        skills: [
            "Node.js", "Express.js", "FastAPI",
            "Socket.io", "RabbitMQ", "Kafka",
            "REST APIs", "GraphQL", "gRPC",
            "JWT", "OAuth", "Session Tokens"
        ],
        description: "High-performance server architecture and scalable APIs."
    },
    {
        id: "ai",
        title: "AI & Intelligent Systems",
        icon: BrainCircuit,
        skills: [
            "OpenAI/Anthropic API", "RAG Pipelines",
            "AI Agents", "LangChain", "LangGraph",
            "Vector Embeddings", "MCP"
        ],
        description: "Building autonomous agents and semantic search systems."
    },
    {
        id: "data",
        title: "Data Infrastructure",
        icon: Database,
        skills: [
            "PostgreSQL", "MongoDB", "Redis",
            "Supabase", "NeonDB", "Pinecone", "Qdrant",
            "Prisma", "Drizzle"
        ],
        description: "Robust data modeling, ORMs, and vector storage."
    },
    {
        id: "devops",
        title: "Cloud & DevOps",
        icon: Cpu,
        skills: [
            "AWS", "Docker", "CI/CD Pipelines",
            "Nginx", "Linux", "Git", "GitHub Actions"
        ],
        description: "Production-grade deployment and infrastructure automation."
    },
    {
        id: "web3",
        title: "Web3 & Blockchain",
        icon: Globe,
        skills: [
            "Solana", "Solidity", "Smart Contracts",
            "Ethereum", "DeFi", "Web3.js"
        ],
        description: "Decentralized applications and on-chain development."
    },
    {
        id: "frontend",
        title: "Frontend Development",
        icon: Cpu,
        skills: [
            "React.js", "Next.js", "Tailwind CSS",
            "Framer Motion"
        ],
        description: "Modern, responsive interfaces with clean architecture."
    }
];
