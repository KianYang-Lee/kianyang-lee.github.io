# Personal Website

## Status
![Deploy to GitHub Pages](https://github.com/KianYang-Lee/kianyang-lee.github.io/actions/workflows/deploy.yml/badge.svg)

## Notes
page.server.ts and page.ts serves very different PURPOSE!

## Library
- `mdsvex`: to build markdown in Svelte project
- `tailwindcss`: for styling. Refer here for configuration https://tailwindcss.com/docs/guides/sveltekit

## SEO
- To ensure `robots.txt` is included in build stage, place it under `\static` folder.

REF: https://stackoverflow.com/questions/72188193/whats-the-best-way-to-add-a-robots-txt-file-to-a-sveltekit-project
REF: https://kit.svelte.dev/docs/seo

## Deploying to Github Page
REF: [How to set dev environment only during development](https://stackoverflow.com/questions/70339952/sveltekit-app-cannot-be-found-in-svelte-config-js)
REF: [Set up project for GitHub pages](https://kit.svelte.dev/docs/adapter-static)
REF: [On successful deployment using Github Actions](https://github.com/Penca53/my-portfolio/)

## References
- [Deploying in GitHub](https://gotofritz.net/blog/how-to-build-blog-with-sveltekit-markdown-tailwind)
- [Adding dependencies easily using svelte-add](https://github.com/svelte-add/svelte-add)
- https://cloudcannon.com/community/learn/sveltekit-beginner-tutorial/blogging-in-sveltekit/
- [Changing deploying branch in GitHub Settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Configuration for Tailwindcss](https://tailwindcss.com/docs/guides/sveltekit)
- [Flowbit styling](https://flowbite.com/docs/components/footer/)
- [Make Use of Components in Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
- [Chriskyfung's Blog](https://chriskyfung.github.io)