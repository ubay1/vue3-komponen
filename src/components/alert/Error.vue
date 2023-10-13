<script setup lang="ts">
const props = withDefaults(defineProps<{ message: string | null }>(), {
  message: null,
});
</script>

<template>
  <div>
    <div class="my-4 flex items-center gap-2 rounded-lg bg-errorSoft p-2 lt-sm:grid lt-sm:grid-cols-[10%_90%] lt-xxs:grid-cols-1 lt-xxs:place-items-center lt-xxs:text-center">
      <div class="i-mdi-close-circle text-white h-8 w-8" />
      <div class="text-sm text-white">{{ props.message }}</div>
    </div>
  </div>
</template>
