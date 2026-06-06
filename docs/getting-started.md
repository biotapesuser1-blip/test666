---
sidebar_position: 2
title: Getting Started
---

# Getting Started

This template includes everything you need to ship a docs site to GitHub Pages.

## Editing pages

Two options:

- **AI editor (recommended)**: open the [MD Docs editor](https://mddocs-site.redbeach-67793768.westus3.azurecontainerapps.io), sign in, pick this repo, and edit any page with natural-language prompts.
- **Directly on GitHub**: click any page in `docs/` here on GitHub and use the pencil-icon edit button.

## Adding pages

Drop a new markdown file under `docs/`. Every file needs YAML frontmatter at the top:

```md
---
title: My new page
sidebar_position: 3
---

Page content here.
```

`sidebar_position` controls where the page appears in the nav (smaller numbers first). Drop a file into a subfolder and it becomes a collapsible group.

## Publishing

Every push to `main` runs the `Deploy to GitHub Pages` Action and publishes the new build. Takes about 1–2 minutes.
