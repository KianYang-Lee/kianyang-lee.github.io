<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';

	export let title: string;
	export let datePublished: Date;
	export let lastUpdated: Date;
	export let component: typeof SvelteComponentTyped;
</script>

<h1>{title}</h1>
{#if datePublished}
	<h5>Published: {datePublished}</h5>
{/if}
{#if lastUpdated}
	<h5>Last Updated: {lastUpdated}</h5>
{/if}

<svelte:component this={component} />
