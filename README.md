# chamanthmvs.github.io

Personal portfolio site for Chamanth MVS — Data Science professional focused on
Deep Learning, Generative AI, and Python.

**Live:** https://chamanthmvs.github.io/

## Overview

A static single-page site built on an HTML5 UP template, with custom
data-driven sections rendered client-side:

- **Reading Shelf** — technical books, from [`assets/js/books-tiles.js`](assets/js/books-tiles.js)
- **My Blogs** — articles, from [`assets/js/blog-tiles.js`](assets/js/blog-tiles.js)
- **Projects** — personal/academic projects, from [`assets/js/projects-tiles.js`](assets/js/projects-tiles.js)

To add or edit an item in any of those sections, update the data array at the
top of the corresponding `*-tiles.js` file.

## Structure

```
index.html            # Page markup and section layout
assets/css/main.css   # Compiled styles (do not edit by hand)
assets/sass/          # Source SASS — edit here, then compile to main.css
assets/js/            # Template scripts + custom *-tiles.js renderers
images/               # Backgrounds and icons
```

## Running locally

No build step is required to view the site. Serve the folder with any static
server, e.g.:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

If you change styles, edit the SASS sources under `assets/sass/` and recompile
to `assets/css/main.css` (e.g. `sass assets/sass/main.scss assets/css/main.css`).

## Deployment

Hosted on GitHub Pages from the `main` branch; pushing to `main` publishes the site.
