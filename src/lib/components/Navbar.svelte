<script lang="ts">
	export let posts: App.Post[];
	export let portfolio: App.Project[];
	let routes: App.Route[] = [
		{ name: 'Home', path: '/', hasChildren: false },
		{ name: 'Blog', path: '/blog', hasChildren: true, children: posts },
		{ name: 'Portfolio', path: '/portfolio', hasChildren: true, children: portfolio }
	];
</script>

<!-- Navigation list -->
<nav class="pt-20 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20">
	<ul class="mt-8 mb-0 list-none pl-2">
		<!-- route[0] is used as key for each row -->
		{#each routes as route (route.name)}
			<li class="mt-8">
				<a href={route.path} class="mb-2 text-sm font-semibold dark:text-zinc-50">{route.name}</a>
				{#if route.hasChildren && route.children}
					<ul class="py-1 list-none">
						{#each route.children as child (child.path)}
							<li
								class="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white"
							>
								<a href={child.path}>{child.name}</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
