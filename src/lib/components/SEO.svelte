<script lang="ts">
	export let title: string;
	export let description: string;
	export let url: URL;
</script>

<svelte:head>
	<title>{title} • Kian Yang</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url.toString()} />
</svelte:head>
