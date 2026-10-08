# Svelte Resume

This is my personal resume website, built using SvelteKit and TypeScript. I wanted a way to share my resume online that looked a bit nicer than a traditional document, while still having the option to download or print a more conventional version.

The site is relatively simple, but I put some thought into keeping it lightweight, responsive, and usable without JavaScript. Since it's just a resume, there's really no reason for it to need much more than HTML and CSS.

You can check out the live site here: https://red-dune-019d25210.1.azurestaticapps.net/

## Features

The website uses a two-column layout on desktop, with my experience, education, and cybersecurity achievements taking up the main section and my technical skills and certifications in a sidebar. On smaller screens, everything moves into a single column.

A few other things I implemented:

- **Light and dark themes:** The site follows your system theme by default, but you can also switch between light and dark manually. The light theme uses Catppuccin Latte, while the dark theme uses a black background with green accents.
- **No client-side JavaScript:** The entire site is statically generated, including the theme switcher, which uses CSS `:has()` instead of JavaScript.
- **Responsive design:** The layout adjusts to different screen sizes, so the resume is readable on both desktop and mobile devices.
- **Print-friendly layout:** Printing the page switches it to a more traditional single-column resume format, with styling based on my original resume.
- **Downloadable PDF:** There's also a PDF version available directly from the website for anyone who would rather have a regular resume document.

One thing worth mentioning is that the theme selection isn't saved between visits. It defaults back to your system preference whenever the page reloads, which I'm fine with for something this simple.

## Technologies

The project uses:

- [SvelteKit](https://svelte.dev/docs/kit/introduction) and Svelte 5
- TypeScript
- CSS
- [Catppuccin](https://catppuccin.com/) colors
- [Mona Sans](https://github.com/github/mona-sans)
- [pnpm](https://pnpm.io/)
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)

I used SvelteKit's static adapter to generate the website as regular HTML and CSS. This means the finished site doesn't need a Node.js server, database, or any client-side JavaScript to function.

## Running locally

The project uses Node.js 24 and pnpm 12.8.1. The Node version is specified in `.node-version`, and the pnpm version is specified in `package.json`.

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Mystery2099/svelte-resume.git
cd svelte-resume
pnpm install
```

Start the development server:

```bash
pnpm dev
```

You can also use the following commands:

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the development server |
| `pnpm build` | Builds the static website |
| `pnpm preview` | Previews the production build locally |
| `pnpm check` | Runs Svelte and TypeScript checks |
| `pnpm lint` | Checks formatting with Prettier |
| `pnpm format` | Formats the project with Prettier |

Running `pnpm build` generates the finished website in the `build/` directory.

## Updating the resume

Most of the resume content is separated from the actual page layout, so updating information doesn't require digging through the Svelte components.

The main files are:

- `src/lib/resume.ts` — Contains the actual resume information, including my experience, education, skills, and achievements.
- `src/routes/+page.svelte` — Handles the page layout, responsive design, and print-specific styling.
- `src/app.css` — Contains shared styling, including colors, typography, and print defaults.
- `static/resume.pdf` — The downloadable PDF version of my resume.

The PDF is maintained separately from the website, so changing the resume content in `resume.ts` won't automatically update it.

## Deployment

I'm hosting the website using Azure Static Web Apps on its free plan. Since SvelteKit generates a fully static website, deployment is pretty straightforward.

The project has two GitHub Actions workflows. One handles formatting, Svelte checks, and building the project whenever changes are pushed or a pull request is opened. The other handles deploying the site to Azure.

I decided to keep deployment manual rather than automatically publishing every change I push. This way, I can make changes to the repository without immediately updating the live website.

To configure deployment for the existing Azure resource:

1. Get the deployment token from Azure Static Web Apps.
2. Add it to the GitHub repository as a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3. Open the repository's **Actions** tab and run the **Deploy to Azure** workflow on `main`.

The workflow builds the website using pnpm and uploads the generated `build/` directory directly to Azure, without having Azure rebuild the project.

For more information about that configuration, see the [Azure Static Web Apps build documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration#skip-building-front-end-app).

## About

This is primarily a personal project, so it's built around my own resume rather than being a general-purpose resume builder or template. That said, the code is available for anyone who wants to look through it or use parts of it for their own projects.

You can find more of my projects on [GitHub](https://github.com/Mystery2099).
