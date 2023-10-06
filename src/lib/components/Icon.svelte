<script lang="ts">
	export let url: string;
	export let tooltipData: string;
</script>

<div class="group relative w-max">
	<a
		href={url}
		target="_blank"
		rel="noreferrer"
		class="sm:inline-flex items-center justify-center w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
	>
		<slot>fallback</slot>
		<span class="sr-only">{tooltipData}</span>
		<span
			class="bg-black text-white font-semibold p-2 pointer-events-none absolute -top-8 -left-8 w-max opacity-0 transition-opacity group-hover:opacity-100"
			>{tooltipData}</span
		>
	</a>
</div>
