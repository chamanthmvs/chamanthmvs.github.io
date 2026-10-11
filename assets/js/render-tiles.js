/* ==============================================================
   Shared tile renderer

   Used by blog-tiles.js, projects-tiles.js and books-tiles.js.
   Each of those files defines its data array and calls:

       renderTiles({ targetId, variant, data })

   Variants:
     "link" — clickable cards (blogs, projects). An item with
              comingSoon: true renders as a non-clickable card.
     "book" — informational cards (reading shelf), never links.
   ============================================================== */

function createLinkTile(item) {
    const comingSoon = item.comingSoon === true;

    const tile = document.createElement(comingSoon ? "div" : "a");

    tile.className = comingSoon ? "blog-tile coming-soon" : "blog-tile";

    if (!comingSoon) {
        tile.href = item.url;
        tile.target = "_blank";
        tile.rel = "noopener noreferrer";
    }

    tile.innerHTML = `
        <div class="blog-tile-body">
            <span class="blog-tile-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;

    return tile;
}

function createBookTile(item) {
    const tile = document.createElement("article");

    tile.className = "book-tile";
    tile.innerHTML = `
        <div class="book-tile-body">
            <span class="book-tile-category">${item.category}</span>
            <h3>${item.title}</h3>
            <p class="book-tile-author">${item.author}</p>
            <p>${item.description}</p>
        </div>
    `;

    return tile;
}

function renderTiles({ targetId, variant, data }) {
    const container = document.getElementById(targetId);

    if (!container) {
        return;
    }

    const build = variant === "book" ? createBookTile : createLinkTile;

    data.forEach((item) => {
        container.appendChild(build(item));
    });
}
