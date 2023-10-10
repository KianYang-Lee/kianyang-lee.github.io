<script lang="ts">
	import type { PageData } from './$types';

	// The path is not of latest. need to trigger a reload of path ( blog -> blog/[slug])
	export let data: PageData;

	const entry = data.resolvedEntries.find(entry => entry[0] === data.url.pathname)
	if (!entry) {
		throw new Error('no such entry')
	}
	const [ _, post ] = entry;
</script>

<h1>{post.metadata.title}</h1>
<svelte:component this={post.default} />
