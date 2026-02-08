
export function generateStructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rxbru",
        "url": "https://rxbru.dev", // TODO: Update with actual domain after deployment
        "jobTitle": "Software Engineer",
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
            "name": "WOMBAT",
            "description": "Secure API vault and proxy management system. Centralized credential management platform allowing granular proxy APIs.",
            "programmingLanguage": ["Next.js", "Supabase", "Prisma", "Express", "Upstash"],
            "codeRepository": "https://github.com/rx6ru/wombat",
            "author": {
                "@type": "Person",
                "name": "Rxbru"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "EDVO",
            "description": "Local-first cross-platform security app built with Kotlin Multiplatform. Ensures zero-knowledge privacy.",
            "programmingLanguage": ["Kotlin Multiplatform", "Compose UI", "SQLDelight", "Ktor"],
            "codeRepository": "https://github.com/rx6ru/EDVO",
            "author": {
                "@type": "Person",
                "name": "Rxbru"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "CONCIZE",
            "description": "Chrome Extension meeting assistant pipeline using RabbitMQ and Groq for transcripts and Qdrant for semantic search.",
            "programmingLanguage": ["Chrome Extension", "Express", "RabbitMQ", "Groq SDK", "Qdrant"],
            "codeRepository": "https://github.com/rx6ru/Concize",
            "author": {
                "@type": "Person",
                "name": "Rxbru"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "W2CHAT",
            "description": "Real-time MERN stack chat application with secure JWT auth and persistent message history.",
            "programmingLanguage": ["React", "Express", "MongoDB", "Socket.IO", "JWT"],
            "codeRepository": "https://github.com/rx6ru/W2Chat",
            "author": {
                "@type": "Person",
                "name": "Rxbru"
            }
        }
    ];

    return { personSchema, projectsSchema };
}
