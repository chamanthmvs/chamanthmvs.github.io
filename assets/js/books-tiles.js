const books = [
    {
        title: "Operating Systems: Three Easy Pieces",
        author: "Remzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dusseau",
        category: "Operating Systems",
        description: "Building a clear foundation in virtualization, concurrency, and persistence."
    },
    {
        title: "Machine Learning with PyTorch and Scikit-Learn",
        author: "Sebastian Raschka, Yuxi Liu, and Vahid Mirjalili",
        category: "Machine Learning",
        description: "A practical path from machine learning fundamentals to modern implementations."
    },
    {
        title: "Build a Large Language Model (From Scratch)",
        author: "Sebastian Raschka",
        category: "Large Language Models",
        description: "Understanding the components behind language models by implementing them step by step."
    },
    {
        title: "Build a Reasoning Model (From Scratch)",
        author: "Sebastian Raschka",
        category: "LLM Reasoning",
        description: "Exploring how language models plan, reason, evaluate answers, and use tools."
    },
    {
        title: "Learning Python",
        author: "Mark Lutz",
        category: "Python",
        description: "A deep reference for Python fundamentals, programming patterns, and the language itself."
    },
    {
        title: "Hands-On Large Language Models",
        author: "Jay Alammar and Maarten Grootendorst",
        category: "Large Language Models",
        description: "Making LLM concepts practical through visual explanations and hands-on examples."
    },
    {
        title: "Designing Multi-Agent Systems",
        author: "Victor Dibia",
        category: "Multi-Agent Systems",
        description: "Thinking about the design, coordination, and implementation of systems built from multiple agents."
    }
];

renderTiles({
    targetId: "book-scroll",
    variant: "book",
    data: books
});
