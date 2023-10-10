<script lang="ts">
	import { getBlogEntry } from '$lib/common';
	import Article from '$lib/components/Article.svelte';
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { metadata, default: component } = getBlogEntry(data.resolvedEntries, data.url.pathname)
</script>

<Head {metadata}/>
<Article {metadata} {component}/>

