const projects = [
    {
        title: "Phishing Website URL Detection",
        description: "A machine learning project for detecting potentially phishing website URLs.",
        tag: "Machine Learning",
        url: "https://chamanthmvs.github.io/Phishing-Website-Detection/"
    },
    {
        title: "Inbox Pilot",
        description: "A human-in-the-loop Gmail organizer that reads only metadata and applies labels you approve, using rules and a batched LLM.",
        tag: "GenAI application",
        url: "https://github.com/chamanthmvs/Inbox-pilot"
    },
    {
        title: "AstroWeave",
        description: "Astrological multi-agent system built by Langgraph (Still under development)",
        tag: "GenAI application",
        url: "https://chamanthmvs.github.io/AstroWeave/"
    },
    {
        title: "More projects in progress",
        description: "New Data Science and Generative AI projects are on the way.",
        tag: "Coming soon",
        comingSoon: true
    }
];

renderTiles({
    targetId: "project-scroll",
    variant: "link",
    data: projects
});
