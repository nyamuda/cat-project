import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')