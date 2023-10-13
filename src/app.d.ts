// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
	interface MdsvexFile {
		default: typeof import('svelte/internal').SvelteComponentTyped;
		metadata: PostMetadata;
	}

	interface PostMetadata {
		title: string;
		description: string;
		published: boolean;
		author: string;
		datePublished: Date;
		lastUpdated: Date;
		categories: string;
		tags: string;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface MdsvexModuleEntry {
		path: string;
		resolver: App.MdsvexResolver;
	}

	interface Route {
		name: string;
		path: string;
		hasChildren: boolean;
		children?: Post[] | Project[];
	}

	interface Post {
		path: string;
		component: MdsvexFile;
		name: string;
	}

	interface Project {
		path: string;
		name: string;
	}
}
