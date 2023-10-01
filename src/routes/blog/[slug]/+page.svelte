<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data: any;
  
</script>

<h1>{ data.frontmatter.title }</h1>
<!-- <p>{data.frontmatter.description}</p> -->
<svelte:component this={data.component}></svelte:component>