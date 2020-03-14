import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from 'lodash'
import Element from 'element-ui'
import './../config/axios'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.use(lodash);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
