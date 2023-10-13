<script lang="ts">
	import type { PageData } from '../portfolio/$types';
	export let data: PageData;
</script>

<nav>
	<ul class="list-disc my-5 pl-7">
		{#each data.portfolio as project (project.name)}
			<li class="">
				<a class="underline font-medium dark:text-zinc-50" href={project.path}>{project.name}</a>
			</li>
		{/each}
	</ul>
</nav>
