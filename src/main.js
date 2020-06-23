import Vue from "vue";
import App from "./App.vue";
import { router } from "./router"
import VueCookies from 'vue-cookies'


import { domain, clientId } from "../auth_config.json";

import { Auth0Plugin } from "./auth";
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: () => {
    router.push({name:'storelist'});
  }
});
Vue.use(VueCookies)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
