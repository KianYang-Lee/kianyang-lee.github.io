<!-- Also known as toast, popup notification or notification bubbles -->
<script lang="ts">
	import { alert } from '$lib/store';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	export let ms = 3000;
	let visible: boolean;
	let timeout: NodeJS.Timeout;

	const onMessageChange = (message: string, ms: number) => {
		clearTimeout(timeout);
		if (!message) {
			visible = false;
		} else {
			visible = true;
			if (ms > 0) {
				timeout = setTimeout(() => (visible = false), ms);
			}
		}
	};

	$: onMessageChange($alert, ms);
	onDestroy(() => clearTimeout(timeout));
</script>

{#if visible}
	<div
		on:click={() => ($alert = '')}
		on:keydown={(event) => {
			if (event.key === 'Escape') {
				visible = false;
			}
		}}
		class="z-50 fixed right-0 mx-6 mt-4 flex items-center font-bold px-2 py-6 text-sm bg-gray-300 dark:bg-blue-400"
		role="alert"
		transition:fly={{ delay: 100, duration: 400, x: 0, y: 300, opacity: 0.3 }}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-6 dark:fill-white"
			><path
				d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
			/></svg
		>
		<p>{$alert}</p>
	</div>
{/if}
