<script lang="ts">
  import PageInProgress from '$lib/components/PageInProgress.svelte';
  import { capitalizePathname } from '$lib/common';
  import type { PageData } from '../blog/$types';
export let data: PageData

let title = capitalizePathname(data.url.pathname)

</script>
<PageInProgress {title} />
<!-- <h1 class="text-center mb-10">{title}</h1> -->
<!-- Image by
<a
	href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2422173"
	>Gerd Altmann</a
>
from
<a
	href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2422173"
	>Pixabay</a
> -->

<ul>
  <li>
    <a href="/blog/first" class="text-white">first</a>
  </li>
  <!-- <li>
    <a href="/blog/second">second</a>
  </li> -->
</ul>