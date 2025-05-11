# Personal Website

![Deploy to GitHub Pages](https://github.com/KianYang-Lee/kianyang-lee.github.io/actions/workflows/deploy.yml/badge.svg)

## Notes
page.server.ts and page.ts serves very different PURPOSE!

## Library
- `mdsvex`: to build markdown in Svelte project
- `@tailwindcss`: for styling. Refer here for configuration https://tailwindcss.com/docs/guides/sveltekit
- `@tailwindcss/typography`: for styling text tags
- `svelte-sitemap`: to generate `sitemap.xml` after build

## SEO
- To ensure `robots.txt` is included in build stage, place it under `\static` folder.
- Include canonical link for SEO [How to specify a canonical with rel="canonical" and other methods
](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- Verified ownership using [Google Search Console](https://search.google.com/search-console/welcome) and following this advice on [SO](https://stackoverflow.com/questions/57384269/github-pages-blog-and-google-search-console-is-it-safe-to-follow-these-steps-fo)

REF: https://stackoverflow.com/questions/72188193/whats-the-best-way-to-add-a-robots-txt-file-to-a-sveltekit-project
REF: https://kit.svelte.dev/docs/seo

## Deploying to Github Page
Originally, I used `deploy.sh` script following [How to Build Blog with Sveltekit, Markdown and Tailwind](https://gotofritz.net/blog/how-to-build-blog-with-sveltekit-markdown-tailwind) to deploy build files manually. However, it become obsolete after I use Github Actions to perform deployment.

REF: [How to set dev environment only during development](https://stackoverflow.com/questions/70339952/sveltekit-app-cannot-be-found-in-svelte-config-js)
REF: [Set up project for GitHub pages](https://kit.svelte.dev/docs/adapter-static)
REF: [On successful deployment using Github Actions](https://github.com/Penca53/my-portfolio/)

## Svelte
- We can specify classes with Javascript attribute (add/remove class programmatically) - https://learn.svelte.dev/tutorial/classes
- Adding error page for SSR - [Add a straightforward way to export error pages with adapter-static #1209](https://github.com/sveltejs/kit/issues/1209)
- `Todo-list` project uses a specific type of two-way communication, namely **props-down, events-up pattern** (parent pass down the properly to children and children despatch an event back to parent). To add full type safety for `createDespatchEvent` function, refer here [Svelte Event Parameter Type for Typescript](https://stackoverflow.com/questions/64087782/svelte-event-parameter-type-for-typescript)

## CSS
- [Tooltip](https://benborgers.com/posts/tailwind-tooltip)

## Markdown
- Library `mdsvex` is used to render markdown, refer https://rodneylab.com/sveltekit-tutorial-mdsvex-blog-site/
REF: https://github.com/mvasigh/sveltekit-mdsvex-blog

## Typescript
- The file `ambient.d.ts` enable us to use types defined here in all modules without the need to explicitly importing them.

## Image handling
- Responsive image handling guide refer to [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Responsive Images 101, Part 1: Definitions](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- How to identify containing block refer to [Layout and the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block)

## Portfolio
- [Tic-Tac-Toe]()
- [To-do List](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
## References
- [Adding dependencies easily using svelte-add](https://github.com/svelte-add/svelte-add)
- https://cloudcannon.com/community/learn/sveltekit-beginner-tutorial/blogging-in-sveltekit/
- [Changing deploying branch in GitHub Settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Configuration for Tailwindcss](https://tailwindcss.com/docs/guides/sveltekit)
- [Flowbit styling](https://flowbite.com/docs/components/footer/)
- [Make Use of Components in Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
- [Chriskyfung's Blog](https://chriskyfung.github.io)
- [Markdown Style Guide](https://www.markdownguide.org/basic-syntax/)# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
