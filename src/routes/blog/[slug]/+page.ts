/** @type {import('./$types').PageLoad} */
const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
export async function load({ params }: any ) {
  
  const modules = import.meta.glob('/src/blog-posts/*.md')
  let match = {};

  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = { path, resolver };
      break;
    }
  }

  const blogPost = await match.resolver();
  
return {
  frontmatter: blogPost.metadata,
  component: blogPost.default
}
}