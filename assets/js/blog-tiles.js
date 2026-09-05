const blogs = [
    {
        title: "No More Confusion on Backpropagation",
        description: "A simple explanation of backpropagation and how it actually works.",
        tag: "Deep Learning",
        url: "https://mvschamanth.medium.com/no-more-confusion-on-backpropagation-7adfc271539f"
    },
    {
        title: "What Does Backprop Through Time in RNN Mean?",
        description: "Understanding Backpropagation Through Time in Recurrent Neural Networks.",
        tag: "Deep Learning",
        url: "https://mvschamanth.medium.com/what-does-backprop-over-time-in-rnn-mean-4233039d927c"
    },
    {
        title: "What Are State, StateGraph and Workflow in LangGraph?",
        description: "Understanding State, StateGraph and Workflow in LangGraph.",
        tag: "Generative AI",
        url: "https://medium.com/generative-ai/what-are-state-sategraph-and-workflow-in-langgraph-afc3f4392c6f"
    },
    {
        title: "What Are State, StateGraph and Workflow in LangGraph?",
        description: "Understanding State, StateGraph and Workflow in LangGraph.",
        tag: "Generative AI",
        url: "https://medium.com/generative-ai/what-are-state-sategraph-and-workflow-in-langgraph-afc3f4392c6f"
    },
    {
        title: "Understanding Frameworks",
        description: "A guide to understanding what is meant by a framework in software development.",
        tag: "Software Engineering",
        url: "https://mvsctechblogs.hashnode.dev/understanding-frameworks"
    },
    {
        title: "Beyond Basics: Solving Interrupt Challenges in LangGraph Workflows",
        description: "Exploring advanced techniques for handling interrupts in LangGraph workflows.",
        tag: "Generative AI",
        url: "https://medium.com/ai-in-plain-english/beyond-basics-solving-interrupt-challenges-in-langgraph-workflows-6c881535e3f1"
    }
];

const blogScroll = document.getElementById("blog-scroll");

blogs.forEach((blog) => {
    const tile = document.createElement("a");

    tile.className = "blog-tile";
    tile.href = blog.url;
    tile.target = "_blank";
    tile.rel = "noopener noreferrer";

    tile.innerHTML = `
        <div class="blog-tile-body">
            <span class="blog-tile-tag">${blog.tag}</span>
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
        </div>
    `;

    blogScroll.appendChild(tile);
});
