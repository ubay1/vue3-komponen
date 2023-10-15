import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import LayoutError from "@/layouts/Error.vue";
// @ts-ignore
import LayoutDefault from "@/layouts/Default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      // @ts-ignore
      component: () => import("./pages/notfound.vue"),
      meta: {
        layout: LayoutError,
      },
    },
    {
      path: "/",
      name: "home",
      // @ts-ignore
      component: () => import("./pages/home.vue"),
      meta: {
        reload: false,
        layout: LayoutDefault,
      },
    },
    {
      path: "/alert",
      name: "alert",
      // @ts-ignore
      component: () => import("./pages/alert.vue"),
      meta: {
        reload: false,
        layout: LayoutDefault,
      },
    },
  ],
  // @ts-ignore
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
