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
    <a href="/blog/linux-commands-and-shell-scripting/1-writing-your-first-shell-script" class="dark:text-zinc-50">Shell Script</a>
  </li>
</ul>