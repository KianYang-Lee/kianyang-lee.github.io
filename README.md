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

REF: https://stackoverflow.com/questions/72188193/whats-the-best-way-to-add-a-robots-txt-file-to-a-sveltekit-project
REF: https://kit.svelte.dev/docs/seo

## Deploying to Github Page
Originally, I used `deploy.sh` script following [How to Build Blog with Sveltekit, Markdown and Tailwind](https://gotofritz.net/blog/how-to-build-blog-with-sveltekit-markdown-tailwind) to deploy build files manually. However, it become obsolete after I use Github Actions to perform deployment.

REF: [How to set dev environment only during development](https://stackoverflow.com/questions/70339952/sveltekit-app-cannot-be-found-in-svelte-config-js)
REF: [Set up project for GitHub pages](https://kit.svelte.dev/docs/adapter-static)
REF: [On successful deployment using Github Actions](https://github.com/Penca53/my-portfolio/)

## Svelte
- We can specify classes with Javascript attribute (add/remove class programmatically) - https://learn.svelte.dev/tutorial/classes

## CSS
- [Tooltip](https://benborgers.com/posts/tailwind-tooltip)

## References
- [Adding dependencies easily using svelte-add](https://github.com/svelte-add/svelte-add)
- https://cloudcannon.com/community/learn/sveltekit-beginner-tutorial/blogging-in-sveltekit/
- [Changing deploying branch in GitHub Settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Configuration for Tailwindcss](https://tailwindcss.com/docs/guides/sveltekit)
- [Flowbit styling](https://flowbite.com/docs/components/footer/)
- [Make Use of Components in Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
- [Chriskyfung's Blog](https://chriskyfung.github.io)
- [Markdown Style Guide](https://www.markdownguide.org/basic-syntax/)