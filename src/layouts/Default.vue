<script setup lang="ts">
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import { menuActiveStore } from "@/stores/menu-active";
import { listMenu } from "@/utils/menu";

const storeMenu = menuActiveStore();

const listSidebar = reactive<{ label: string; path: string }[]>(listMenu);

function clicks(item: { label: string; path: string }) {
  storeMenu.title = item.label;
  storeMenu.path = item.path;
}
</script>

<template>
  <main class="h-full min-h-screen">
    <div class="flex h-screen">
      <div class="bg-white relative flex flex-col overflow-auto w-25% shadow-gmail lt-md:hidden">
        <div class="bg-white fixed h-30 w-20% flex flex-col justify-center items-center">
          <img src="/lego.svg" alt="" width="100" class="pointer-events-none rotate-180" />
        </div>
        <div class="mt-30 flex flex-col">
          <RouterLink
            v-for="(item, index) in listSidebar"
            :key="`list-sidebar-${index}`"
            class="text-black decoration-none text-sm p-2 px-4 hover:bg-dark hover:text-white"
            :class="{
              'bg-dark text-white': storeMenu.path === item.path,
            }"
            :to="item.path"
            @click="clicks(item)"
            >{{ item.label }}</RouterLink
          >
        </div>
      </div>
      <div class="w-full h-full overflow-scroll">
        <header
          class="w-full relative bg-white backdrop-blur-7 bg-opacity-7 sticky top-0 h-20 flex justify-center items-center font-bold text-2xl"
        >
          <button class="btn-transparent absolute z-50 left-5 p-2 rounded-full hover:bg-gray-2 md:hidden">
            <div class="i-mdi-menu text-2xl"></div>
          </button>
          {{ storeMenu.title }}
        </header>
        <div class="p-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </main>
</template>
