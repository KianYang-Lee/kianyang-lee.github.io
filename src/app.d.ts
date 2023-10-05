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
		metadata: Record<string, string>;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;
	
	interface BlogPost {
		slug: string,
		title: string,
		content: string
	}

	interface MdsvexModuleEntry {
		path: string;
		resolver: App.MdsvexResolver;
	}
}
