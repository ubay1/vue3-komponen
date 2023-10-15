<script setup lang="ts">
import { ref } from "vue";
import Error from "../layouts/Error.vue";
import { Head } from "@vueuse/head";

const title = ref(import.meta.env.VITE_TITLE);
</script>

<template>
  <Error>
    <Head>
      <title>Halaman tidak ditemukan | {{ title }}</title>
      <base href="/base" />
    </Head>
    <div class="flex flex-col justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazApMEHG8rfAMQEufM9B4bsjou-0beSiuYfYbyIJfXHodyzXqnP0FugKhfTgD6bsGWKw&usqp=CAU"
        alt=""
        class="pointer-events-none"
      />
      <div class="text-white">Halaman tidak ditemukan</div>
    </div>
  </Error>
</template>
