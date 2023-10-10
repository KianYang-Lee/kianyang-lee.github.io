export function capitalizePathname(pathname: string) {
	let title = pathname.substring(1, pathname.length);
	title = title.charAt(0).toUpperCase() + title.substring(1, title.length);
	return title;
}

export function getBlogEntry(
	entries: App.Post[],
	pathname: string
): App.MdsvexFile {
  console.log('entries : ', entries);
  console.log('pathname: ', pathname);
  
  
	const entry = entries.find((entry) => entry.path === pathname);
  console.log('entry : ', entry);
  
	if (!entry) {
		throw new Error('no such entry');
	}
	return entry.component;
}
