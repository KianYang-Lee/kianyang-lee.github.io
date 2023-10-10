<script lang="ts">
	export let metadata: App.PostMetadata;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
</svelte:head>
