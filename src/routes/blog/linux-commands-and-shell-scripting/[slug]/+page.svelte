<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data: any;
  
</script>

<article class="prose prose-gray dark:prose-invert">
  <h1>{ data.frontmatter.title }</h1>
  <svelte:component this={data.component} class="bg-teal-300"></svelte:component>
</article>