<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$lib/components/Article.svelte';
	import SEO from '$lib/components/SEO.svelte';

	export let data: PageData;

	$: ({ metadata, url, component } = data);
</script>

<SEO {url} {...metadata} />
<Article {...metadata} {component} />
