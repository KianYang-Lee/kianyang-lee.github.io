<script lang="ts">
	let routes = [
		['Home', '/'],
		['Blog', '/blog'],
		['Portfolio', '/portfolio']
	];
</script>

<!-- Navigation list -->
<nav class="pt-20 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20">
	<ul class="mt-8 mb-0 list-none">
		<!-- route[0] is used as key for each row -->
		{#each routes as route (route[0])}
			<li class="mt-8">
				<a href={route[1]} class="mb-2 text-sm font-semibold dark:text-zinc-50">{route[0]}</a>
			</li>
		{/each}
	</ul>
</nav>
