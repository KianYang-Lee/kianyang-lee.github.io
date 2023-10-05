<script lang="ts">
  import PageInProgress from '$lib/components/PageInProgress.svelte';
  import { capitalizePathname } from '$lib/common';
  import type { PageData } from '../blog/$types';
export let data: PageData

let title = capitalizePathname(data.url.pathname)

</script>
<PageInProgress {title} />

<ul>
  <li>
    <a href="/blog/first" class="text-white dark:text-gray-900">first</a>
  </li>
  <!-- <li>
    <a href="/blog/second">second</a>
  </li> -->
</ul>