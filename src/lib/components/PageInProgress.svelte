<script lang="ts">
	import maintenance from '$lib/assets/maintenance-2422173_1280.png';
	import { capitalizePathname } from '$lib/common';
	export let title: string;
	title = capitalizePathname(title);
</script>

<h1 class="text-center mb-10">{title}</h1>

<p class="text-center">Page under construction. Please come back at a near future.</p>
<img src={maintenance} alt="" class="mt-10" />
