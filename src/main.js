import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

AOS.init({
  delay: 100,
  duration: 600
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
