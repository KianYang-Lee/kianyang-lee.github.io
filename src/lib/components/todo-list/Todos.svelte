<script lang="ts">
	import TodoComponent from '$lib/components/todo-list/Todo.svelte';
	import type { SvelteComponent } from 'svelte';
	import NewTodo from './NewTodo.svelte';
	import TodoStatus from './TodoStatus.svelte';
	import { alert } from '$lib/store';
	import Filter from './Filter.svelte';

	let todosStatus: SvelteComponent;
	export let todos: Todo[] = [];
	let filter = 'all';
	$: {
		switch (filter) {
			case 'active':
				$alert = 'Browsing active to-dos';
				break;
			case 'completed':
				$alert = 'Browsing completed to-dos';
				break;
			default:
				$alert = 'Browsing all to-dos';
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

<div class="p-16 mt-8 mb-16 shadow-2xl dark:shadow-blue-500	">
	<NewTodo on:addTodo={(e) => addTodo(e.detail)} autofocus />
	<Filter bind:filter />
	<TodoStatus {todos} bind:this={todosStatus} 
	on:checkAll={(e) => checkAllTodos(e.detail)}
	on:removeCompleted={removeCompletedTodos}
	/>
	<hr class="mt-8"/>
	<ul class="mt-8">
		{#each filterTodos(filter, todos) as todo, index (todo.id)}
			<li>
				<TodoComponent
					index={index + 1}
					{todo}
					on:update={(event) => updateTodo(event.detail)}
					on:remove={(event) => removeTodo(event.detail)}
				/>
			</li>
		{/each}
	</ul>


</div>
