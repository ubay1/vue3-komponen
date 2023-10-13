<script setup lang="ts">
import AlertError from "./components/alert/Error.vue";
import AlertInfo from "./components/alert/Info.vue";
import AlertWarning from "./components/alert/Warning.vue";
</script>

<template>
  <div class="h-full px-4 my-4">
    <div class="grid grid-cols-2">
      <div class="">
        <div class="font-bold text-xl">Alert</div>
        <AlertError message="Alert error" />
        <AlertInfo message="Alert info" />
        <AlertWarning message="Alert warning" />
      </div>
    </div>
  </div>
</template>
