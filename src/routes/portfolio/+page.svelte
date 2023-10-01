<script lang="ts">
	import type { PageData } from '../portfolio/$types';
	import maintenance from '$lib/assets/maintenance-2422173_1280.png';
	import { capitalizePathname } from '$lib/common';
	export let data: PageData;

	let title = capitalizePathname(data.url.pathname);
</script>

<h1 class="text-center mb-10">{title}</h1>
<p class="text-center">Page under construction. Please come back at a near future.</p>
<img src={maintenance} alt="" class="mt-10" />
<!-- <div class="mr-auto ml-auto align-middle self-center object-center bg-center">
	<div class="mr-auto ml-auto align-middle self-center object-center bg-center">
		Image by
		<a
			href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2422173"
			>Gerd Altmann</a
		>
		from
		<a
			href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2422173"
			>Pixabay</a
		>
	</div>

</div> -->
