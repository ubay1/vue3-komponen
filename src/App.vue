<script setup lang="ts">
import Error from "./components/alerts/Error.vue";
</script>

<template>
  <div class="h-full px-4 my-4">
    <div class="grid grid-cols-2">
      <div class="">
        <div class="font-bold text-xl">Alert</div>
        <Error message="Alert error" />
      </div>
    </div>
  </div>
</template>
