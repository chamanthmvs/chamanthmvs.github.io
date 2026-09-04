const blogGrid = document.getElementById("blog-scroll");

console.log("BLOG JS IS RUNNING");
console.log("blogGrid:", blogGrid);

blogGrid.innerHTML = `
    <a href="#" class="blog-tile">

        <div class="blog-tile-img"></div>

        <div class="blog-tile-body">

            <span class="blog-tile-tag">
                TEST ARTICLE
            </span>

            <h3>
                This is a test blog
            </h3>

            <p>
                If you can see this tile, your HTML and CSS are working.
            </p>

        </div>

    </a>
`;
