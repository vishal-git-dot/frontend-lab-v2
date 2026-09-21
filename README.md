# Frontend Lab

A small, self-hosted collection of modern UI experiments — buttons,
cards, loaders, navigation, hover effects, and micro-interactions.
Each one is plain HTML, CSS, and JavaScript, built to be read in a
minute and copied straight into another project.

No framework, no bundler, no build step.

## Running it locally

There's nothing to install. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static server, e.g.:

  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

Both work identically — the gallery's data is loaded from a plain
`<script>` tag (`data/experiments.js`), not `fetch()`, so it isn't
affected by `file://` CORS restrictions the way a JSON fetch would be.

## Project structure

```
index.html                   Landing page + gallery
assets/
  css/
    tokens.css                Design tokens (colors, type, spacing)
    main.css                  Landing page + gallery styles
    experiment-shell.css      Shared chrome for each demo page
  js/
    main.js                   Gallery render / filter / search
    hero.js                   The three live widgets in the hero
data/
  experiments.js               The experiment registry (plain JS array)
experiments/
  <category>/
    <experiment-id>/
      index.html
      style.css               The reusable component — copy this
      script.js                Interaction logic, if any
```

Each experiment page is self-contained: its `style.css` and
`script.js` hold only the component itself, kept deliberately
separate from the page chrome (back link, footer) in
`experiment-shell.css`, so what you copy out is just the component.

## Adding a new experiment

1. Duplicate any folder under `experiments/<category>/` (or start a
   new category folder) and build your idea in its `index.html`,
   `style.css`, and `script.js`.
2. Open `data/experiments.js` and add one object pointing at the new
   folder — `id`, `title`, `category`, a one-line `description`, and
   the `path`.
3. Refresh `index.html`. That's it — no generator script to run, and
   nothing else to keep in sync.

If you want a whole new category (not just a new item in an existing
one), also add it to the `CATEGORIES` array in the same file.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which publishes
the site on every push to `main`. Since there's no build step, it's a
single job: checkout → upload the repo as the Pages artifact →
deploy. There's nothing to regenerate and nothing that can drift out
of sync between a commit and what's live.

One-time setup, after pushing this repo to GitHub:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
3. Push to `main` (or re-run the workflow from the **Actions** tab).
   The first run will print your site's URL in its summary, typically
   `https://<username>.github.io/<repo>/`.

You can also trigger a deploy manually from **Actions → Deploy to
GitHub Pages → Run workflow**, thanks to the `workflow_dispatch`
trigger in the workflow file.

### Why this setup won't drift

Everything the page needs — including the experiment list — is
committed source, not something generated at build time. So there's
no separate "did the build step run" question: whatever is in the
repo on `main` is exactly what gets deployed, every time.
