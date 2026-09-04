// Add a new blog post by adding one line to this list.
const blogUrls = [
	"https://mvschamanth.medium.com/no-more-confusion-on-backpropagation-7adfc271539f",
	"https://mvschamanth.medium.com/what-does-backprop-over-time-in-rnn-mean-4233039d927c",
	"https://medium.com/generative-ai/what-are-state-sategraph-and-workflow-in-langgraph-afc3f4392c6f"
];

const blogGrid = document.getElementById('blog-scroll');

function makeTileShell(url) {
	const a = document.createElement('a');
	a.className = 'blog-tile loading';
	a.href = url;
	a.target = '_blank';
	a.rel = 'noopener';
	a.innerHTML = `
		<div class="blog-tile-img"></div>
		<div class="blog-tile-body">
			<span class="blog-tile-tag">Loading…</span>
			<h3>Fetching…</h3>
			<p></p>
		</div>
	`;
	blogGrid.appendChild(a);
	return a;
}

async function fillTile(tileEl, url) {
	try {
		const res = await fetch('https://api.microlink.io/?url=' + encodeURIComponent(url));
		const json = await res.json();
		if (json.status !== 'success') throw new Error('fetch failed');
		const d = json.data;
		tileEl.classList.remove('loading');
		const imgUrl = (d.image && d.image.url) || (d.logo && d.logo.url) || '';
		tileEl.innerHTML = `
			${imgUrl ? `<img class="blog-tile-img" src="${imgUrl}" alt="" />` : `<div class="blog-tile-img"></div>`}
			<div class="blog-tile-body">
				<span class="blog-tile-tag">${d.publisher || 'Article'}</span>
				<h3>${d.title || url}</h3>
				<p>${d.description ? d.description.slice(0, 90) : ''}</p>
			</div>
		`;
	} catch (e) {
		tileEl.classList.remove('loading');
		tileEl.innerHTML = `
			<div class="blog-tile-img"></div>
			<div class="blog-tile-body">
				<span class="blog-tile-tag">Couldn't auto-load</span>
				<h3>${url}</h3>
				<p>Link still works — click to open.</p>
			</div>
		`;
	}
}

blogUrls.forEach(url => {
	const tile = makeTileShell(url);
	fillTile(tile, url);
});
