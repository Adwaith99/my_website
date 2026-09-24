# Structural Biology Portfolio

A responsive academic portfolio built with React, Tailwind CSS and Vite. The tailored visual system is kept in `src/index.css` and remains available alongside Tailwind utilities.

## Update your content

- Edit your name, contact details and profile links in `src/App.jsx` (`profile`).
- Replace the portrait placeholder in `src/App.jsx` and place your image in `public/`.
- Original, non-deployed portrait files are kept in `source-images/`.
- Edit publications in `src/data/publications.js`.
  Add a `doi`, `preprint`, or `pdf` URL to an entry to display its corresponding link; omit the field to hide that link.
- Edit research themes and methods in `src/data/research.js`.
- Update the page title and social metadata in `index.html`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Run the complete pre-deployment check with:

```bash
npm run check
```

Deploy the generated `dist/` directory to any static host. Add a canonical URL and an absolute Open Graph image URL to `index.html` once the final domain is known.

## Publish with GitHub Pages

This repository includes `.github/workflows/deploy-pages.yml`. Every push to `main` checks and builds the site, then deploys the generated `dist/` directory.

1. Create an empty repository on GitHub (do not add a README or `.gitignore`).
2. Copy the repository URL and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab to follow the first deployment. GitHub will show the live URL when it finishes.

The Vite build uses relative asset paths, so the site works both at `username.github.io/repository-name/` and with a future custom domain.
