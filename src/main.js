import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
// import 'swiper/swiper-bundle.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
