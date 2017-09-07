// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 完整引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.config.productionTip = false;

// 使用 element-ui
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
