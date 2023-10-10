export function capitalizePathname(pathname: string) {
	let title = pathname.substring(1, pathname.length);
	title = title.charAt(0).toUpperCase() + title.substring(1, title.length);
	return title;
}
