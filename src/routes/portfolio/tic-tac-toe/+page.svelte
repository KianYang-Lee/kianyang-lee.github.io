<script lang="ts">
	
	import SEO from "$lib/components/SEO.svelte";
	import type { PageData } from "./$types";
	export let data: PageData
	const title = "Tic-Tac-Toe"
	const description = "Tic-Tac-Toe project built using pure Javascript, HTML and CSS"
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	let squares = Array(9).fill('');
	let mark = 'x';

	$: winningLine = [] as number[];
	$: notification = '';

	function placeMark(i: number) {
		squares[i] = mark;
		for (const line of lines) {
			if (line.includes(i)) {
				const [left, mid, right] = line;
				if (squares[left] === squares[mid] && squares[mid] === squares[right]) {
					winningLine = line;
					notification = `Winner is ${mark}`;
				}
			}
		}
		mark = mark === 'x' ? 'o' : 'x';
	}

	function reset() {
		squares = squares.fill('');
		mark = 'x';
		notification = 'Restarted round';
		winningLine = [];
	}
</script>
<SEO {title} url={data.url} {description}/>
<div class="contents">
	<h1 class="mb-6 text-center">{title}</h1>
	<div id="container" class="flex items-center justify-center flex-col h-full">
		<div
			id="board"
			class="bg-yellow-500 grid grid-cols-3 grid-rows-3 h-96 p-2 gap-1 rounded mb-6 aspect-square"
		>
			{#each squares as square, i}
				<button
					on:click={() => placeMark(i)}
					class="bg-white text-3xl"
					disabled={square || winningLine.length}
					class:bg-red-400={winningLine.includes(i)}>{square}</button
				>
			{/each}
		</div>
		<div>
			<button on:click={reset} class="bg-orange-600 px-8 py-2 rounded-sm">Reset</button>
		</div>
		<div>
			{#if notification}
				<p class="text-center">{notification}</p>
			{/if}
		</div>
	</div>
</div>
