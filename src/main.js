import { createApp } from "vue";

import App from "./App.vue";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

import "bootstrap/dist/css/bootstrap.css";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
