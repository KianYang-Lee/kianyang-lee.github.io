<template>
  <UNavigationMenu :items="items" />
</template>
<script setup lang="ts">
import { Socmeds } from '~/domain/socmed';

const items = Socmeds;
</script>
