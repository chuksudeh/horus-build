// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vueHeadful from "vue-headful";

Vue.component("vue-headful", vueHeadful);
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
// import M from "materialize-css";
import store from "./store/index";
import Vuelidate from "vuelidate";
// import "vue-country-region-select";
// const VueUploadComponent = require("vue-upload-component");
// Vue.component("file-upload", VueUploadComponent);

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store: store,
  // M,
  BootstrapVue,
  router,
  vueHeadful,
  components: { App },
  template: "<App/>"
});
