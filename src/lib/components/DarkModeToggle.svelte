<script lang="ts">
	import { onMount } from 'svelte';
	let theme: string | null = null;
	onMount(() => {
		if ('theme' in localStorage) {
			theme = localStorage.getItem('theme')!;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		toggleDarkModeByTheme(theme);
	});

	function toggle() {
		theme = localStorage.getItem('theme');
		// If theme is null, get the value from browser preference
		if (theme === null) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
			toggleDarkModeByTheme(theme);
		} else {
			theme = theme === 'dark' ? 'light' : 'dark';
			toggleDarkModeByTheme(theme);
		}
		localStorage.setItem('theme', theme);
	}

	const toggleDarkModeByTheme = (theme: string) => {
		theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	};
</script>

<!-- text-gray-500 w-10 h-10 dark:text-gray-400  -->
<button id="theme-toggle" on:click={toggle} class="sm:inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1 w-10 h-10" type="button">
		<svg
			id="theme-toggle-dark-icon"
			class="w-4 h-4 {theme === 'light' ? '' : 'hidden'}"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 18 20"
		>
			<path
				d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"
			/>
		</svg>
		<svg
			id="theme-toggle-light-icon"
			class="w-4 h-4 dark:text-zinc-50 {theme === 'dark' ? '' : 'hidden'}"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"
			/>
		</svg>
</button>
