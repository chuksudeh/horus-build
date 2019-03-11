// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import store from "./store/index";
import Vuelidate from "vuelidate";
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store: store,
  BootstrapVue,
  router,
  components: { App },
  template: "<App/>"
});
