<script lang="ts">
	import type { PageData, RouteParams } from './$types';
	import Article from '$lib/components/Article.svelte';
	import Head from '$lib/components/Head.svelte';

	export let data: PageData;

	$: ({ metadata, url, component } = data);
</script>

<Head {metadata} {url} />
<Article {metadata} {component} />
