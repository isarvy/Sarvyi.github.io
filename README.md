# Sarvagya Singh | Portfolio

React + TypeScript + Tailwind portfolio, deployed to Vercel with GitHub Actions.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

Content lives in `src/data/*.ts`; blog posts are Markdown files in `src/content/posts/`.

## Deploy
Pushing to the `devops` branch runs `.github/workflows/deploy.yml`, which lints, builds and deploys to the linked Vercel project (production domain). Pull requests into `devops` get a preview URL.

Required GitHub repo secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
Optional Vercel env var: `VITE_WEB3FORMS_KEY` (contact form).
