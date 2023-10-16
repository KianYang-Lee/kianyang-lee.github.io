<script lang="ts">
	import FilterButton from '$lib/components/todo-list/FilterButton.svelte';
	import TodoComponent from '$lib/components/todo-list/Todo.svelte';
	import type { SvelteComponent } from 'svelte';
	import AllActions from './AllActions.svelte';
	import NewTodo from './NewTodo.svelte';
	import TodoStatus from './TodoStatus.svelte';
	import { alert } from '$lib/store';

	let todosStatus: SvelteComponent;
	export let todos: Todo[] = [];
	let filter = 'all';
	$: {
		switch (filter) {
			case 'active':
				$alert = 'Browsing active Todos';
				break;
			case 'completed':
				$alert = 'Browsing completed Todos';
				break;
			default:
				$alert = 'Browsing all Todos';
				break;
		}
	}
	$: newTodoid = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

	function addTodo(name: string) {
		todos = [...todos, { id: newTodoid, name, completed: false }];
		$alert = `Todo ${name} has been added`;
	}
	function removeTodo(todo: Todo) {
		todos = todos.filter((t) => t.id !== todo.id);
		todosStatus.focus();
		$alert = `Todo ${todo.name} has been removed`;
	}
	function updateTodo(todo: Todo) {
		const i = todos.findIndex((t) => t.id === todo.id);
		if (todos[i].name !== todo.name) {
			$alert = `Todo ${todos[i].name} has been renamed to ${todo.name}`;
		}
		if (todos[i].completed != todo.completed) {
			$alert = `Todo ${todos[i].name} marked as ${todo.completed ? 'Completed' : 'Active'}`;
		}
		todos[i] = { ...todos[i], ...todo };
	}
	const filterTodos = (filter: string, todos: Todo[]) => {
		switch (filter) {
			case 'active':
				return todos.filter((todo) => !todo.completed);
			case 'completed':
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	const checkAllTodos = (completed: boolean) => {
		todos = todos.map((t) => ({ ...t, completed }));
		$alert = `${completed ? 'Checked' : 'Unchecked'} ${todos.length} to-dos `;
		console.log('asdasdas');
	};
	const removeCompletedTodos = () => {
		$alert = `Removed ${todos.filter((todo) => !todo.completed).length} to-dos`;
		todos = todos.filter((todo) => !todo.completed);
	};
</script>

<div class="todoapp stack-large">
	<FilterButton bind:filter />

	<NewTodo on:addTodo={(e) => addTodo(e.detail)} autofocus />
	<TodoStatus {todos} bind:this={todosStatus} />
	<ul>
		{#each filterTodos(filter, todos) as todo (todo.id)}
			<li>
				<TodoComponent
					{todo}
					on:update={(event) => updateTodo(event.detail)}
					on:remove={(event) => removeTodo(event.detail)}
				/>
			</li>
		{/each}
	</ul>

	<hr />
	<AllActions
		{todos}
		on:checkAll={(e) => checkAllTodos(e.detail)}
		on:removeCompleted={removeCompletedTodos}
	/>
</div>
