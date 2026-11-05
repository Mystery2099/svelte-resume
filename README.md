# Mathew Kennedy-Brewer's resume

Live at [resume.mathewtech.us](https://resume.mathewtech.us/).

A one-page SvelteKit resume with Catppuccin green accents and a skills sidebar. It has a black dark theme and a Catppuccin Latte light theme, follows the system setting by default, and offers a System / Light / Dark switch built with CSS `:has()`. The switch needs no JavaScript, so a manual choice lasts until the page reloads. Experience, education, and cybersecurity achievements occupy the main column. On smaller screens, the sidebar follows the main content.

The static build contains complete HTML and CSS with no client-side JavaScript. Email, phone, GitHub, and PDF links work without hydration. Browser printing switches to a single-column layout that mirrors the Word and PDF resume: Arial, the same margins, teal section rules, and the same section order.

## Development

Use Node.js 24 and pnpm 12.8.1, as declared in `.node-version` and `package.json`.

```sh
pnpm install
pnpm dev
```

## Checks and build

```sh
pnpm lint
pnpm check
pnpm build
pnpm preview
```

`pnpm format` formats source files with Prettier. `pnpm build` generates the deployable site in `build/`. GitHub Actions runs formatting, type/accessibility checks, and the production build on pushes and pull requests.

## Updating the resume

- Edit `src/lib/resume.ts` for the resume content.
- Edit `src/routes/+page.svelte` for the page layout and its responsive and print styles.
- Edit `src/app.css` for shared colors, typography, and print defaults.
- Replace `static/resume.pdf` to update the downloadable PDF. The PDF is a copy of the original supplied resume and is maintained separately from the web content.

Local resume originals and agent tooling are excluded from version control. The downloadable PDF lives in `static/resume.pdf`.

## Cloudflare Pages

Cloudflare Pages hosts the site at [resume.mathewtech.us](https://resume.mathewtech.us/). The default Pages URL is [resume-1xo.pages.dev](https://resume-1xo.pages.dev/), and the downloadable resume is at [resume.mathewtech.us/resume.pdf](https://resume.mathewtech.us/resume.pdf).

The Pages project is `resume` in Mathews Account, connected to the `Mystery2099/svelte-resume` GitHub repository. Every push to `main`, including a merged pull request, automatically builds and deploys production through Cloudflare's Git integration. GitHub Actions separately runs the repository checks.

The app uses `@sveltejs/adapter-static` and needs no server, database, or API. The Pages build settings are:

| Setting                | Value                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------- |
| Production branch      | `main`                                                                                  |
| Framework preset       | None                                                                                    |
| Root directory         | Repository root                                                                         |
| Build command          | `corepack pnpm install --frozen-lockfile && corepack pnpm check && corepack pnpm build` |
| Build output directory | `build`                                                                                 |
| Environment variable   | `SKIP_DEPENDENCY_INSTALL=1`                                                             |
| Node.js version        | 24, from `.node-version`                                                                |
| pnpm version           | 12.8.1, from `package.json`                                                             |

The build command installs locked dependencies, runs type and accessibility checks, and generates the static site. `SKIP_DEPENDENCY_INSTALL=1` skips Cloudflare's automatic dependency installation because the build command handles it explicitly. Pages deployment does not require a GitHub Actions deployment token.

Manage builds, logs, preview deployments, and custom domains in the [Cloudflare Pages project dashboard](https://dash.cloudflare.com/ca6802d32936db8a98c661703bb90c72/pages/view/resume). The custom domain uses a Cloudflare-managed CNAME from `resume.mathewtech.us` to `resume-1xo.pages.dev`, with HTTPS enabled.

## Existing Azure deployment

The previous site remains available at [red-dune-019d25210.1.azurestaticapps.net](https://red-dune-019d25210.1.azurestaticapps.net/). The Azure resource is `mathew-resume` in resource group `rg-mathew-resume`.

The existing `.github/workflows/azure-static-web-apps.yml` workflow still deploys to Azure on pushes to `main` and manual runs, using the `AZURE_STATIC_WEB_APPS_API_TOKEN` repository secret. This runs independently of Cloudflare Pages. The Azure workflow and resource have not been retired.
