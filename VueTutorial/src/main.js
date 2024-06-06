//main.js

import { createApp } from "vue";
// import your own css 
import "@style/style.css";
//* Root component
import App from "./App.vue";
//* Import our router setting.
import router from "./router/"
//* This is where index.html create and mount a Vue instance. (Use router and plugins before mounting the instance.)
createApp(App)
.use(router)
.mount("#app");
