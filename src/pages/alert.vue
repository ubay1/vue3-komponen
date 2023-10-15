<script setup lang="ts">
import AlertError from "@/components/alert/Error.vue";
import AlertInfo from "@/components/alert/Info.vue";
import AlertWarning from "@/components/alert/Warning.vue";
import { menuActiveStore } from "@/stores/menu-active";

const storeMenu = menuActiveStore();
storeMenu.setMenu({
  path: "/alert",
  title: "Komponen Alert",
});
</script>

<template>
  <AlertError message="Alert error" />
  <AlertInfo message="Alert info" />
  <AlertWarning message="Alert warning" />
</template>
