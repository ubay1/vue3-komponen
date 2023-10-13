<script setup lang="ts">
import { ref } from "vue";
import AlertError from "./components/alert/Error.vue";
import AlertInfo from "./components/alert/Info.vue";
import AlertWarning from "./components/alert/Warning.vue";
import Modal from "./components/modal/Modal.vue";

const isOpenDialog = ref<boolean>(false);
</script>

<template>
  <div class="h-full px-4 my-4">
    <div class="grid grid-cols-2 gap-10 lt-md:grid-cols-1 lt-md:gap-2">
      <div class="">
        <div class="font-bold text-xl">Alert</div>
        <AlertError message="Alert error" />
        <AlertInfo message="Alert info" />
        <AlertWarning message="Alert warning" />
      </div>
      <div>
        <div class="font-bold text-xl">Dialog</div>
        <button class="btn-fill-primary mt-4" @click="isOpenDialog = true">Open dialogs</button>
        <Teleport to="body">
          <Modal v-if="isOpenDialog" title="Test Dialog" @close="isOpenDialog = false"> ini dialog modal </Modal>
        </Teleport>
      </div>
    </div>
  </div>
</template>
