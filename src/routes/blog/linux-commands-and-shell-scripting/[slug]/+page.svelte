<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="prose prose-gray dark:prose-invert">
	<h1>{data.frontmatter.title}</h1>
	<svelte:component this={data.component} />
</article>
