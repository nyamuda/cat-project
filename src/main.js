import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

import { store } from "./components/store/store";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");