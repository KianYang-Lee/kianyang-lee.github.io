<script lang="ts">
	import FilterButton from './FilterButton.svelte';

	export let filter: string;
</script>

<div class="flex mt-8">
	<FilterButton on:click={() => (filter = 'all')} ariaPressed={filter === 'all'}>
		<span>All</span>
	</FilterButton>
	<FilterButton on:click={() => (filter = 'active')} ariaPressed={filter === 'active'}>
		<span>Active</span>
	</FilterButton>
	<FilterButton on:click={() => (filter = 'completed')} ariaPressed={filter === 'completed'}>
		<span>Completed</span>
	</FilterButton>
</div>
