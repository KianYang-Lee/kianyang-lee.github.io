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
	<h2 class="label-wrapper">
		<label for="todo-0" class="label__lg"> What needs to be done? </label>
	</h2>
	<input
		use:selectOnFocus
		type="text"
		id="todo-0"
		bind:this={nameEl}
		bind:value={name}
		autocomplete="off"
	/>
	<button type="submit" disabled={!name} class="btn btn__primary btn__lg"> Add </button>
</form>
