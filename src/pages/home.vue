<script setup lang="ts">
import { menuActiveStore } from "@/stores/menu-active";

const storeMenu = menuActiveStore();
storeMenu.setDefault();
</script>

<template>
  <div>Home</div>
</template>
