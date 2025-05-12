<script setup>
const category = useRoute().params.category;
const title = useRoute().params.title;
const { data: post } = await useAsyncData(`blog-${category}-${title}`, () => {
  return queryCollection('blog').path(`/blog/${category}/${title}`).first();
});
</script>

<template>
  <ContentRenderer :value="post" />
</template>
