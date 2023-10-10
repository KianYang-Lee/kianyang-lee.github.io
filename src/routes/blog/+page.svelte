<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<nav>
	<ul>
		{#each data.resolvedEntries as post}
			<li>
				<a href={post[0]}>{post[1].metadata.title}</a>
			</li>
		{/each}
	</ul>
</nav>
