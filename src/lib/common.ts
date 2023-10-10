import type { RouteParams } from '../routes/blog/[category]/[post]/$types';

export function capitalizePathname(pathname: string) {
	let title = pathname.substring(1, pathname.length);
	title = title.charAt(0).toUpperCase() + title.substring(1, title.length);
	return title;
}

export function getBlogEntry(entries: App.Post[], params: RouteParams): App.MdsvexFile {
	const entry = entries.find((entry) => {
		const parts = entry.path.split('/');
		const postName = parts.pop();
		const categoryName = parts.pop();
		return postName === params.post && categoryName === params.category;
	});

	if (!entry) {
		throw new Error('no such entry');
	}
	return entry.component;
}
