<script lang="ts">
	export let metadata: App.PostMetadata;
	export let url: URL
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<link rel="canonical" href={url.toString()}>
</svelte:head>
