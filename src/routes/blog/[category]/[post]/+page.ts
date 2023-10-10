import { error } from '@sveltejs/kit';
import type { RouteParams } from './$types';

export async function load({ parent, params, url }) {
	const { resolvedEntries } = await parent();
	function getBlogEntry(entries: App.Post[], params: RouteParams): App.MdsvexFile {
		let postName: string | undefined = '';
		let categoryName: string | undefined = '';
		const entry = entries.find((entry) => {
			const parts = entry.path.split('/');
			postName = parts.pop();
			categoryName = parts.pop();
			return postName === params.post && categoryName === params.category;
		});

		if (!entry) {
			throw error(404, {
				message: `Post titled ${postName} under category ${categoryName} is not found.`
			});
		}
		return entry.component;
	}
	const { metadata, default: component } = getBlogEntry(resolvedEntries, params);
	return { params, url, metadata, component };
}
