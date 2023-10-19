<script lang="ts">
	export let ariaPressed: boolean | 'false' | 'mixed' | 'true' | null | undefined;
</script>

<button
	class="py-1 px-4 capitalize cursor-pointer border-solid border-2 border-red-900 flex-1 ml-3 first:ml-0 bg-orange-200"
	class:bg-orange-400={ariaPressed}
	class:underline={ariaPressed}
	class:border-orange-400={ariaPressed}
	on:click
	aria-pressed={ariaPressed}
>
	<slot />
</button>
