<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<nav>
	<ul>
		{#each data.resolvedEntries as post}
			<li>
				<a href={post.path}>{post.name}</a>
			</li>
		{/each}
	</ul>
</nav>
