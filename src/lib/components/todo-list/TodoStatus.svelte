<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let todos: Todo[];

	$: totalTodos = todos.length;
	$: completedTodos = todos.filter((todo) => todo.completed).length;

	let headingEl: HTMLHeadingElement;
	export function focus() {
		headingEl.focus();
	}
	const dispatch = createEventDispatcher<{ checkAll: boolean; removeCompleted: undefined }>();

	let completed = true;

	const checkAll = () => {
		dispatch('checkAll', completed);
		completed = !completed;
	};

	const removeCompleted = () => dispatch('removeCompleted');
</script>

<div class="grid sm:grid-flow-col sm:grid-cols-[1fr_200px] gap-2 mt-8 items-center">
	<h2 id="list-heading" bind:this={headingEl} tabindex="-1" class="">
		{completedTodos} out of {totalTodos} items completed
	</h2>
	
	<div class="grid grid-flow-col gap-2 grid-cols-2">
		<button type="button" class="py-1 border-solid border-2 border-red-900 bg-orange-200 dark:text-black" on:click={checkAll} disabled={todos.length === 0}
			>{completed ? 'Check' : 'Uncheck'} all</button
		>
		<button
			type="button"
			class="py-1 border-solid border-2 border-red-900 bg-orange-200 dark:text-black"
			on:click={removeCompleted}
			disabled={completedTodos === 0}>Remove completed</button
		>
	</div>

</div>
