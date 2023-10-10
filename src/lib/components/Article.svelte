<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';

	export let metadata: App.PostMetadata;
	export let component: typeof SvelteComponentTyped;
</script>

<h1>{metadata.title}</h1>
{#if metadata.datePublished}
	<h5>Published: {metadata.datePublished}</h5>
{/if}
{#if metadata.lastUpdated}
	<h5>Last Updated: {metadata.lastUpdated}</h5>
{/if}

<svelte:component this={component} />
