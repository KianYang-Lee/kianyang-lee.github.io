<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { tick } from 'svelte';
	import { selectOnFocus } from '$lib/common';
	export let todo: Todo;
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
			class="stack-small"
			on:keydown={(e) => e.key === 'Escape' && onCancel()}
		>
			<div class="form-group">
				<label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
				<input
					type="text"
					use:selectOnFocus
					bind:this={nameEl}
					bind:value={name}
					id="todo-{todo.id}"
					autocomplete="off"
					class="todo-text"
				/>
			</div>
			<div class="btn-group">
				<button class="btn todo-cancel" on:click={onCancel} type="button">Cancel</button>
				<button class="btn btn__primary todo-edit" type="submit" disabled={!name}>Save</button>
			</div>
		</form>
	{:else}
		<div>
			<input id="todo-{todo.id}" on:click={onToggle} type="checkbox" checked={todo.completed} />
			<label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
		</div>
		<div>
			<button type="button" class="btn" on:click={onEdit} use:focusEditButton>
				Edit <span class="visually-hidden">{todo.name}</span>
			</button>
			<button type="button" class="btn btn__danger" on:click={onRemove}>
				Delete <span class="visually-hidden">{todo.name}</span>
			</button>
		</div>
	{/if}
</div>
