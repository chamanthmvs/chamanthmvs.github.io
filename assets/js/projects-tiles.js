const projects = [
    {
        title: "Phishing Website URL Detection",
        description: "A machine learning project for detecting potentially phishing website URLs.",
        tag: "Machine Learning",
        url: "https://chamanthmvs.github.io/Phishing-Website-Detection/"
    },
    {
        title: "AstroWeave",
        description: "Astrological multi-agent system built by Langgraph (Still under development)",
        tag: "GenAI application",
        url: "https://chamanthmvs.github.io/AstroWeave/"
    },
    {
        title: "Loading...",
        description: "Project details are coming soon.",
        tag: "Upcoming",
        url: "#projects"
    },
    {
        title: "Upcoming Project",
        description: "Project details are coming soon.",
        tag: "Upcoming",
        url: "#projects"
    },
    {
        title: "Loading...",
        description: "Project details are coming soon.",
        tag: "Upcoming",
        url: "#projects"
    }
];

const projectScroll = document.getElementById("project-scroll");

projects.forEach((project) => {
    const tile = document.createElement("a");

    tile.className = "blog-tile";
    tile.href = project.url;
    tile.target = "_blank";
    tile.rel = "noopener noreferrer";

    tile.innerHTML = `
        <div class="blog-tile-body">
            <span class="blog-tile-tag">${project.tag}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;

    projectScroll.appendChild(tile);
});
