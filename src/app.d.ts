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
		categories: string
		tags: string
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;
	
	interface MdsvexModuleEntry {
		path: string;
		resolver: App.MdsvexResolver;
	}
}
