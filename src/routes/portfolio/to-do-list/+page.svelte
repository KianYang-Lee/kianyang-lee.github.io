<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import type { PageData } from './$types';
	import Todos from '$lib/components/todo-list/Todos.svelte';
	import { todos } from '$lib/store';
	import Alert from '$lib/components/Alert.svelte';

	export let data: PageData;
	const title = 'To-do List';
	const description = 'To-do list project built using Javascript, HTML and CSS';
</script>

<SEO {title} {description} url={data.url} />
<h1 class="text-center">{title}</h1>
<Alert />
<Todos bind:todos={$todos} />
