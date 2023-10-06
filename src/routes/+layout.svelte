<script lang="ts">
	import '../app.css';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<header
	class="sticky top-0 z-40 flex-none w-full mx-aut border-b border-gray-200 bg-white dark:bg-gray-700"
>
	<div class="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-7xl lg:px-4">
		<nav class="flex items-center justify-between flex-wrap  p-6">
			<div class="h-8 mr-3 w-full flex-grow lg:flex lg:items-center lg:w-auto">
				<Hamburger />
				<!-- <div class="hidden text-sm font-medium lg:flex-grow lg:block">
					<a href="/" class="block mt-4 lg:inline-block lg:mt-2 hover:text-white mr-12	">Home</a>
					<a href="/blog" class="block mt-4 lg:inline-block lg:mt-2 hover:text-white mr-12">Blog</a>
					<a href="/portfolio" class="block lg:inline-block lg:mt-2 mt-4 hover:text-white"
						>Portfolio</a
					>
				</div> -->
			</div>
		</nav>
		<div class="flex items-center">
			<Icon url="https://www.linkedin.com/in/kian-yang-lee/" tooltipData="View LinkedIn profile">
				<svg
					class="w-6 h-6 text-blue-700 fill-current dark:text-zinc-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
					/>
				</svg>
			</Icon>
			<Icon url="https://medium.com/@kianyang_lee" tooltipData="View Medium profile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 50"
					class="dark:text-zinc-50 fill-current"
				>
					<path
						d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"
					/>
				</svg>
			</Icon>
			<Icon url="https://github.com/KianYang-Lee" tooltipData="View Github profile">
				<svg
					class="w-6 h-6 text-black fill-current dark:text-zinc-50"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
						clip-rule="evenodd"
					/>
				</svg>
			</Icon>
			<DarkModeToggle />
		</div>
	</div>
</header>
<!-- Content -->
<div class="w-full px-4 max-w-7xl mx-auto ">
	<div class="lg:flex" id="nav-and-content-container">
		<aside
			id="sidebar"
			class="fixed inset-0 z-20 flex-none hidden w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block"
		>
			<div
				id="nav-wrapper"
				class="overflow-y-auto z-20 max-h-screen max-w-2xs lg:block lg:sticky top-24 lg:top-28 lg:mr-0 bg-white dark:bg-gray-900"
			>
				<Navbar />
			</div>
		</aside>
		<main
			id="content-wrapper"
			class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
		>
			<div class="flex w-full">
				<div class="flex-auto max-w-4xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb-12 xl:pb-24 lg:pb-16 ">
					<slot />
				</div>
				<div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block" />
			</div>
		</main>
	</div>
</div>
<footer class="py-12 h-12">
	<p class="text-center">© Kian Yang Lee (2023)</p>
</footer>
