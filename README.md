# geodesix-docs

The source repository for the [Geodesix developer documentation site](https://docs.geodesix.com) - a unified, client-facing reference for all Geodesix integration tools.

## What This Site Does

This repo builds and deploys a [Docusaurus 3](https://docusaurus.io/) documentation site that aggregates developer docs from three separate private repositories into a single, searchable site. It covers:

- **PHP SDK**: integrating Geodesix into PHP applications
- **Python SDK**: integrating Geodesix into Python-based platforms and data pipelines
- **WordPress Plugin**: installing and configuring the Geodesix WordPress plugin (no coding required)

## Where It's Hosted

The site is live at **[https://docs.geodesix.com](https://docs.geodesix.com)** via a custom domain pointed at GitHub Pages.

## Where the Docs Come From

**This repo is not the source of truth for documentation content.** The `docs/` directory contains local placeholder files only (so `npm start` works locally). When the site is built and deployed, CI replaces these placeholders by pulling the real documentation directly from three private SDK repositories:

| Section | Source Repository | File Pulled |
|---|---|---|
| PHP SDK | `geodesix-io/geodesix-sdk-php` | `README.md` |
| Python SDK | `geodesix-io/geodesix-sdk-python` | `README.md` |
| WordPress Plugin | `geodesix-io/geodesix-sdk-wordpress` | `UserGuide.md` |

Each file has Docusaurus frontmatter prepended automatically during the build before the site is compiled and deployed.

## Deployment

Deployment is fully automated via **GitHub Actions** (`.github/workflows/deploy.yml`). The pipeline runs on three triggers:

- Push to `main`
- Daily at 6:00 AM UTC (keeps docs in sync with SDK repos even without a docs-repo commit)
- Manual dispatch via the GitHub Actions UI

The pipeline:
1. Checks out this repo
2. Pulls the relevant file from each of the three private SDK repos using the `DOCS_GITHUB_TOKEN` secret
3. Injects Docusaurus frontmatter and copies the files into `docs/`
4. Runs `npm ci` and `npm run build`
5. Deploys the `build/` output to GitHub Pages

Only one deployment runs at a time - concurrent deployments are cancelled.

## Required Secret

| Secret | Purpose |
|---|---|
| `DOCS_GITHUB_TOKEN` | PAT with read access to the three private `geodesix-io` SDK repositories |

## Local Development

```bash
npm install
npm start       # Dev server at http://localhost:3000 with hot reload
npm run build   # Production build to build/
npm run serve   # Serve the production build locally
npm run clear   # Clear Docusaurus cache (.docusaurus/)
```

> Note: Running locally uses the placeholder docs in `docs/`. The full content is only assembled during CI.

## Tech Stack

- [Docusaurus 3](https://docusaurus.io/) (React-based static site generator)
- GitHub Actions for CI/CD
- GitHub Pages for hosting
- Custom domain: `docs.geodesix.com`
