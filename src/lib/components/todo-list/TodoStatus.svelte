<script lang="ts">
	export let todos: Todo[];

	$: totalTodos = todos.length;
	$: completedTodos = todos.filter((todo) => todo.completed).length;

	let headingEl: HTMLHeadingElement;
	export function focus() {
		headingEl.focus();
	}
</script>

<h2 id="list-heading" bind:this={headingEl} tabindex="-1">
	{completedTodos} out of {totalTodos} items completed
</h2>
