# My Docs Site

A Docusaurus-powered documentation site that publishes to GitHub Pages.

Edit pages with AI assistance at [MD Docs](https://mddocs-site.redbeach-67793768.westus3.azurecontainerapps.io).

## Local dev

```bash
npm install
npm start    # → http://localhost:3000
```

## How publishing works

1. Edit pages (via the MD Docs editor, the GitHub web UI, or locally).
2. Push to `main`.
3. The `Deploy to GitHub Pages` Action builds with Docusaurus and publishes the result to GitHub Pages.
4. Live in ~1–2 minutes at the URL configured in your repo's Settings → Pages.

## Configuring the site URL

When you enable GitHub Pages on this repo (Settings → Pages → Source: "GitHub Actions"), Pages will publish at `https://<your-username>.github.io/<this-repo-name>/`. Edit `docusaurus.config.js` so `url`, `baseUrl`, `organizationName`, and `projectName` match. (The MD Docs editor will offer to do this for you on first connection.)
