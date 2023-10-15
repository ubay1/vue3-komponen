import { defineStore } from "pinia";

export const menuActiveStore = defineStore("menuActiveStore", {
  state: () => {
    return {
      path: "/" as string | null,
      title: "Vue 3 Komponen ❤️ UnoCss",
    };
  },
  actions: {
    setDefault() {
      this.path = "/";
      this.title = "Vue 3 Komponen ❤️ UnoCss";
    },
    setMenu(data: { path: string; title: string }) {
      this.path = data.path;
      this.title = data.title;
    },
  },
});
