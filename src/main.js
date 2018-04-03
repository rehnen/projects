import Vue from 'vue';
import Resource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Resource);
Vue.http.options.root = 'https://api.github.com';
Vue.http.headers.common.Accept = 'application/vnd.github.v3+json';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
