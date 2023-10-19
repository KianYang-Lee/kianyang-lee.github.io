<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { selectOnFocus } from '$lib/common';
	const dispatch = createEventDispatcher<{ addTodo: string }>();
	export let autofocus = false;
	let name = '';
	let nameEl: HTMLInputElement;
	const addTodo = () => {
		dispatch('addTodo', name);
		name = '';
		nameEl.focus();
	};
	const onCancel = () => {
		name = '';
		nameEl.focus();
	};
	onMount(() => {
		autofocus && nameEl.focus();
	});
</script>

<form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
	<h2 class="text-center mb-8">My To-do List</h2>
	<div class="grid grid-flow-row sm:grid-flow-col sm:grid-cols-[1fr_100px] items-center gap-2">
		<div class="grid grid-flow-row sm:grid-flow-col sm:grid-cols-[100px_1fr] h-full items-center">
			<label for="todo-0" class="text-center font-semibold sm:text-left">New to-do:</label>
			<input
				use:selectOnFocus
				type="text"
				id="todo-0"
				bind:this={nameEl}
				bind:value={name}
				autocomplete="off"
				class="border-solid border-black border-2 h-full"
			/>
		</div>
		<button
			type="submit"
			disabled={!name}
			class="py-1 border-solid border-2 border-green-900 bg-green-600 text-white">Add</button
		>
	</div>
</form>
