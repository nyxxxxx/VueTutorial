import { createApp } from "vue";
//* Root component
import App from "./App.vue";

// import css 
import '@style/theme.css';
import "@style/style.css";
// Import Pinia
import pinia from "@plugins/pinia";
// Import PrimeVue from plugins/primevue.js
import { PrimeVue, PrimeVueConfig } from "@plugins/primevue";
//* Import our router setting.
import router from "./router/"

//* This is where index.html create and mount a Vue instance. (Use router and plugins before mounting the instance.)
createApp(App)
.use(router)
.use(pinia)
.use(PrimeVue)
.mount("#app");