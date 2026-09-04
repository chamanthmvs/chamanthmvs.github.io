console.log("BLOG JS IS RUNNING");

const blogScroll = document.getElementById("blog-scroll");

console.log("BLOG CONTAINER:", blogScroll);

blogScroll.innerHTML = `
    <a href="https://mvschamanth.medium.com/no-more-confusion-on-backpropagation-7adfc271539f"
       target="_blank"
       class="blog-tile">

        <div class="blog-tile-body">

            <span class="blog-tile-tag">
                Deep Learning
            </span>

            <h3>
                No More Confusion on Backpropagation
            </h3>

            <p>
                A simple explanation of backpropagation and how it actually works.
            </p>

        </div>

    </a>
`;
