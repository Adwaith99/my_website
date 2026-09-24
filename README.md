# Structural Biology Portfolio

A responsive academic portfolio built with React, Tailwind CSS and Vite. The tailored visual system is kept in `src/index.css` and remains available alongside Tailwind utilities.

## Update your content

- Edit your name, contact details and profile links in `src/App.jsx` (`profile`).
- Replace the portrait placeholder in `src/App.jsx` and place your image in `public/`.
- To enable the hero CV button, place your PDF at `public/Adwaith_Uday_CV.pdf`, then set `profile.cv` in `src/App.jsx` to `'Adwaith_Uday_CV.pdf'`.
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

## Deploy with Vercel

The repository is configured for direct Vercel deployment:

1. In Vercel, choose **Add New → Project** and import this GitHub repository.
2. Keep the detected **Vite** framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not detect them automatically.
4. Deploy. Every future push to `main` will update the production site.
