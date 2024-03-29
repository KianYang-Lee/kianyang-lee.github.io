<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { tick } from 'svelte';
	import { selectOnFocus } from '$lib/common';
	export let todo: Todo;
	export let index: number;
	let editing = false;
	let name = todo.name;
	let nameEl: HTMLInputElement;
	let editButtonPressed = false;
	const dispatch = createEventDispatcher<{ remove: Todo; update: Todo }>();
	const focusEditButton = (node: HTMLButtonElement) => {
		editButtonPressed && node.focus();
	};

	const focusOnInit = (node: HTMLButtonElement) => {
		node && typeof node.focus === 'function' && node.focus();
	};
	function update(updatedTodo: Todo) {
		todo = { ...todo, ...updatedTodo };
		dispatch('update', todo);
	}

	function onToggle() {
		update({ ...todo, completed: !todo.completed });
	}

	async function onEdit() {
		editButtonPressed = true;
		editing = true;
		await tick();
		nameEl.focus();
	}

	function onSave() {
		update({ ...todo, name });
		editing = false;
	}

	function onCancel() {
		name = todo.name;
		editing = false;
	}

	function onRemove() {
		dispatch('remove', todo);
	}
</script>

<div>
	{#if editing}
		<form
			on:submit|preventDefault={onSave}
			class="grid sm:grid-flow-col sm:grid-cols-[1fr_150px] gap-2 items-center"
			on:keydown={(e) => e.key === 'Escape' && onCancel()}
		>
			<div>
				<label for="todo-{todo.id}" class="todo-label" >{index}.&nbsp</label>
				<input
					type="text"
					use:selectOnFocus
					bind:this={nameEl}
					bind:value={name}
					id="todo-{todo.id}"
					autocomplete="off"
					class="w-11/12"
				/>
			</div>
			<div class="grid grid-flow-col grid-cols-2 gap-2 items-center">
				<button
					class="py-1 border-solid border-2 border-red-900 bg-orange-200 dark:text-black"
					on:click={onCancel}
					type="button">Cancel</button
				>
				<button
					class="py-1 border-solid border-2 flex-1 border-green-900 bg-green-600 text-white"
					type="submit"
					disabled={!name}>Save</button
				>
			</div>
		</form>
	{:else}
		<div class="grid sm:grid-flow-col sm:grid-cols-[1fr_150px] gap-2 items-center">
			<div>
				<input id="todo-{todo.id}" on:click={onToggle} type="checkbox" checked={todo.completed} />
				<label for="todo-{todo.id}" class="todo-label">{index}.&nbsp{todo.name}</label>
			</div>
			<div class="grid grid-flow-col grid-cols-2 gap-2">
				<button
					type="button"
					class="py-1 border-solid border-2 border-red-900 bg-orange-200 dark:text-black"
					on:click={onEdit}
					use:focusEditButton
				>
					Edit
				</button>
				<button
					type="button"
					class="py-1 border-solid border-2 border-red-900 bg-red-700 text-white"
					on:click={onRemove}
				>
					Del
				</button>
			</div>
		</div>
	{/if}
</div>
