const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export async function load({ params }) {
	const modules = import.meta.glob<App.MdsvexFile>('/src/posts/**/*.md');

	let match = {} as App.MdsvexModuleEntry;

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
	};
}
