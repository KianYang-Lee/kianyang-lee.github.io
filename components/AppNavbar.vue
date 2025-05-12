<template>
  <UNavigationMenu
    :items="items"
    class="w-full justify-center"
    orientation="vertical"
  />
</template>

<script setup lang="ts">
import type { NavigationMenuItem, TooltipProps } from '@nuxt/ui';
import type { BlogCollectionItem } from '~/domain/blog';

const { data } = await useAsyncData(`blog`, () => {
  return queryCollection('blog').all();
});

const categoryMap = new Map<string, BlogCollectionItem[]>();
if (data.value) {
  const { value: blogs } = data;
  const categories = blogs.map((blog) => blog.category);
  categories.forEach((category) => {
    const blogsWithSameCategory = blogs.filter(
      (blog) => blog.category === category
    );

    categoryMap.set(category, blogsWithSameCategory);
  });
}

const categories: NavigationMenuItem[] = [];
for (const category of categoryMap.keys()) {
  const categoryGroup = categoryMap.get(category);

  const children: NavigationMenuItem[] | undefined = categoryGroup?.map(
    (blog) => {
      const tooltip: TooltipProps = {
        text: blog.title,
      };
      return {
        label: blog.title,
        to: blog.path,
        tooltip,
      };
    }
  );

  categories.push({
    label: category,
    children,
  });
}

const items: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-material-symbols-light:house',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-material-symbols-light:inventory-2',
    children: categories,
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: 'i-material-symbols-light:folder-open',
  },
];
</script>
