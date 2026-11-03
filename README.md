# Mathew Kennedy-Brewer's resume

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

## Azure Static Web Apps

The app uses `@sveltejs/adapter-static`. It needs no server, database, or API. The deployment workflow builds with pnpm and uploads the `build/` directory directly, with Azure's own build step disabled.

The site is live at https://red-dune-019d25210.1.azurestaticapps.net/ on Azure's Free plan. The Azure resource is `mathew-resume` in resource group `rg-mathew-resume`. The initial deployment was uploaded directly from a local build.

Every push to `main` (including a merged pull request) runs **Deploy to Azure**. The workflow installs locked dependencies, checks formatting and types, builds the site, and uploads it only if all checks pass. Other branches and pull requests run checks without deploying. You can also run **Deploy to Azure** manually on `main` from the Actions tab.

One-time credential setup, using an account with access to the Azure resource and GitHub repository:

```sh
az login
gh auth login
az staticwebapp secrets list \
  --name mathew-resume \
  --resource-group rg-mathew-resume \
  --query properties.apiKey --output tsv \
  | gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --repo Mystery2099/svelte-resume
```

This pipes the token directly into GitHub's encrypted repository secret. Alternatively, copy **Manage deployment token** from the Azure resource into **Settings → Secrets and variables → Actions → New repository secret** on GitHub, using the name `AZURE_STATIC_WEB_APPS_API_TOKEN`.

Push this workflow to `main` to activate automatic deployment. Follow the run in the [repository's Actions tab](https://github.com/Mystery2099/svelte-resume/actions/workflows/azure-static-web-apps.yml). A missing deployment secret produces a setup error before the build. Production deployments run serially so an older in-progress upload finishes before a newer one starts.

See [Azure build configuration](https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration#skip-building-front-end-app) for the static upload settings. Custom domains and HTTPS can be configured on the Azure resource after deployment.
