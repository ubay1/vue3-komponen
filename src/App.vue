<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
const route = useRoute();
const compLayout = computed(() => route.meta.layout);

// function clicks(item: { label: string; path: string }) {
//   storeMenu.title = item.label;
//   storeMenu.path = item.path;
// }
</script>

<template>
  <component :is="compLayout">
    <router-view></router-view>
  </component>
</template>
