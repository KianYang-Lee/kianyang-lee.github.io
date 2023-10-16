export const prerender = true; // server-side rendering

export async function load({ url }) {
	const postModules = import.meta.glob<App.MdsvexFile>('/src/posts/**/*.md');

	let resolvedEntries = [] as App.Post[];

	await Promise.all(
		Object.entries(postModules).map(async (entry) => {
			const fullPathSplitted = entry[0].split('/');
			const filename = fullPathSplitted.pop();
			if (!filename) {
				throw new Error('filename is undefined!');
			}

			const category = fullPathSplitted.pop();
			if (!category) {
				throw new Error('category is undefined');
			}

			const name = filename.substring(0, filename.indexOf('.'));
			const resolvedEntry = await entry[1]();

			resolvedEntries = [
				...resolvedEntries,
				{
					path: `/blog/${category}/${name}`,
					component: resolvedEntry,
					name: resolvedEntry.metadata.title
				}
			];
		})
	);

	const portfolio: App.Project[] = [
		{ name: 'Tic-Tac-Toe', path: '/portfolio/tic-tac-toe' },
		{ name: 'To-do List', path: '/portfolio/to-do-list' }
	];

	return {
		url,
		resolvedEntries,
		portfolio
	};
}
