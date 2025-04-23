import { createApp } from "vue";
import App from "./App.vue";

const FontSize = {
  beforeMount(el) {
    el.style.fontSize = "100px";
  },
};

const app = createApp(App);

app.directive("size", FontSize);
app.mount("#app");
