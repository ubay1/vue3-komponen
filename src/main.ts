import { createApp } from "vue";
import { createPinia } from "pinia";
// @ts-ignore
import App from "./App.vue";
import router from "./routes";
import "./style.css";
import "virtual:uno.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
