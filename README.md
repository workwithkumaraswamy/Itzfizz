# ITZ FIZZ

A responsive React + Vite landing page featuring an original CSS/SVG beverage visual and a scrubbed GSAP ScrollTrigger hero sequence.

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To run the production build and preview it locally:

```sh
npm test
npm run build
npm run preview
```

## Animation

`src/App.jsx` scopes GSAP timelines to the React root with `gsap.context()` and registers ScrollTrigger once at module scope. An entrance timeline introduces the hero on load. A pinned ScrollTrigger timeline with `scrub` ties the can's movement, scale, and rotation, the hero copy, and floating bubble depth to scroll progress, so scrolling back up reverses the presentation. `gsap.matchMedia()` selects desktop/mobile pin distances and the reduced-motion preference. Context cleanup removes the timelines and triggers on unmount.

The three percentages in `src/components/Statistics.jsx` are illustrative marketing placeholders, not verified claims. Replace them with approved copy before a commercial release.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds, and publishes `dist` on each push to `main`.

Vite reads `GITHUB_REPOSITORY` in Actions and sets the base path to `/<repository-name>/`; local development and preview use `/`. The Pages workflow publishes the deployment URL in its run summary. A public repository or deployed URL is not included until the project is pushed to GitHub and the workflow succeeds.

## Notes

- The product can is an original local SVG asset at `public/assets/itz-fizz-can.svg`; no external image licensing is needed.
- Google Fonts are loaded from Google Fonts. System sans-serif fallbacks are provided.
- The contact email and social status in the footer are clearly marked placeholders; replace them with verified brand details before launch.
