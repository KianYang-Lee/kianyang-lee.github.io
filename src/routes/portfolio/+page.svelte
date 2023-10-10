<script lang="ts">
	import type { PageData } from '../portfolio/$types';
	import PageInProgress from '$lib/components/PageInProgress.svelte';
	export let data: PageData;
</script>

<PageInProgress title={data.url.pathname} />
