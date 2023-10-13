<script setup lang="ts">
const props = defineProps<{ title: string }>();
const emit = defineEmits(["close"]);

const closeModal = () => emit("close");
</script>

<template>
  <div class="fixed top-0 left-0 z-1900 w-full h-full flex justify-center items-center backdrop-blur-5">
    <div class="fixed inset-0 bg-[rgba(0,0,0,0.8)] opacity-50 z-20"></div>
    <div class="bg-white p-2 rounded-lg shadow-xl w-[80%] max-h-full overflow-auto z-1901 lt-sm:w-full lt-md:w[80%]">
      <div class="flex items-start justify-between border-b rounded-t p-4">
        <div class="text-xl font-semibold text-gray-900">
          {{ props.title }}
        </div>
        <button type="button" class="hover:bg-disabled p-2 btn-transparent" @click="closeModal">
          <div class="i-mdi-close text-black" />
        </button>
      </div>
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
