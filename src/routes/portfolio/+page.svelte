<script lang="ts">
	import type { PageData } from '../portfolio/$types';
	import PageInProgress from '$lib/components/PageInProgress.svelte';
	import { capitalizePathname } from '$lib/common';
	export let data: PageData;

	let title = capitalizePathname(data.url.pathname);
</script>

<PageInProgress {title} />
