export function generateStructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Amar Mahato",
        "url": "https://rxbru.dev", // TODO: Update with actual domain after deployment
        "jobTitle": [
            "Software Developer",
            "Backend Developer",
            "Applied AI Engineer"
        ],
        "knowsAbout": [
            "Software Architecture",
            "High-Performance Computing",
            "Distributed Systems",
            "TypeScript",
            "Kotlin",
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "System Design"
        ],
        "sameAs": [
            "https://github.com/rx6ru",
            "https://x.com/RxBRU_",
            "https://www.linkedin.com/in/rxbru/"
        ]
    };

    const projectsSchema = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "CONCIZE",
            "description": "A Chrome Extension meeting assistant pipeline.",
            "programmingLanguage": ["CHROME EXTENSION", "EXPRESS", "RABBITMQ", "GROQ SDK", "SARVAM AI", "GEMINI", "QDRANT", "MONGODB"],
            "codeRepository": "https://github.com/rx6ru/Concize",
            "author": {
                "@type": "Person",
                "name": "Amar Mahato"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "TRECL",
            "description": "A multi-agent job research tool built with LangGraph.",
            "programmingLanguage": ["PYTHON", "LANGGRAPH", "QDRANT", "GEMINI", "CEREBRAS", "PYGITHUB", "TAVILY", "PYDANTIC"],
            "codeRepository": "https://github.com/rx6ru/Trecl",
            "author": {
                "@type": "Person",
                "name": "Amar Mahato"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "WOMBAT",
            "description": "Secure API vault and proxy management system.",
            "programmingLanguage": ["NEXT.JS", "EXPRESS", "GO", "GOOGLE KMS", "SUPABASE", "PRISMA"],
            "codeRepository": "https://github.com/rx6ru/wombat",
            "author": {
                "@type": "Person",
                "name": "Amar Mahato"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "HEADLESS GHIDRA MCP",
            "description": "An MCP server for automated Ghidra binary analysis by LLMs.",
            "programmingLanguage": ["PYTHON", "JAVA", "GHIDRA", "MCP", "CAPSTONE", "PEFILE"],
            "codeRepository": "https://github.com/rx6ru/headless-ghidra-mcp",
            "author": {
                "@type": "Person",
                "name": "Amar Mahato"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "EDVO",
            "description": "Local-first cross-platform security app built with Kotlin Multiplatform.",
            "programmingLanguage": ["KOTLIN", "JETPACK COMPOSE", "SQLDELIGHT", "KTOR"],
            "codeRepository": "https://github.com/rx6ru/EDVO",
            "author": {
                "@type": "Person",
                "name": "Amar Mahato"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "W2CHAT",
            "description": "Real-time MERN stack chat application with secure JWT auth.",
            "programmingLanguage": ["MERN STACK", "SOCKET.IO", "JWT", "REACT"],
            "codeRepository": "https://github.com/rx6ru/W2Chat",
            "author": {
                "@type": "Person",
                "name": "Amar Mahato"
            }
        }
    ];

    return { personSchema, projectsSchema };
}
