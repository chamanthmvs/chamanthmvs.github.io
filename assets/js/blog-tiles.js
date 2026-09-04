const blogUrls = [
    "https://mvschamanth.medium.com/no-more-confusion-on-backpropagation-7adfc271539f",
    "https://mvschamanth.medium.com/what-does-backprop-over-time-in-rnn-mean-42333039d927c",
    "https://medium.com/generative-ai/what-are-state-sategraph-and-workflow-in-langgraph-afc3f4392c6f"
];

const blogGrid = document.getElementById("blog-scroll");

function createTile(url) {

    const tile = document.createElement("a");

    tile.className = "blog-tile";
    tile.href = url;
    tile.target = "_blank";
    tile.rel = "noopener noreferrer";

    tile.innerHTML = `
        <div class="blog-tile-img"></div>

        <div class="blog-tile-body">
            <span class="blog-tile-tag">Article</span>
            <h3>Loading...</h3>
            <p></p>
        </div>
    `;

    blogGrid.appendChild(tile);

    return tile;
}


async function loadTile(tile, url) {

    try {

        const response = await fetch(
            "https://api.microlink.io/?url=" +
            encodeURIComponent(url)
        );

        if (!response.ok) {
            throw new Error("Microlink request failed");
        }

        const result = await response.json();

        console.log("Microlink response:", result);

        if (result.status !== "success") {
            throw new Error("Microlink could not read the page");
        }

        const data = result.data;

        const image =
            data.image?.url ||
            data.logo?.url ||
            "";

        tile.innerHTML = `
            ${
                image
                ? `<img class="blog-tile-img" src="${image}" alt="">`
                : `<div class="blog-tile-img"></div>`
            }

            <div class="blog-tile-body">

                <span class="blog-tile-tag">
                    ${data.publisher || "Article"}
                </span>

                <h3>
                    ${data.title || "Untitled article"}
                </h3>

                <p>
                    ${
                        data.description
                        ? data.description.slice(0, 100) + "..."
                        : ""
                    }
                </p>

            </div>
        `;

    } catch (error) {

        console.error("Could not load:", url, error);

        tile.innerHTML = `
            <div class="blog-tile-img"></div>

            <div class="blog-tile-body">

                <span class="blog-tile-tag">
                    Article
                </span>

                <h3>
                    Unable to load preview
                </h3>

                <p>
                    Click to read the article.
                </p>

            </div>
        `;
    }
}


blogUrls.forEach(url => {

    const tile = createTile(url);

    loadTile(tile, url);

});
