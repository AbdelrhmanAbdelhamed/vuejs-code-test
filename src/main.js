import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/main.scss';

import './filters';

// Globally register all `Base{}`prefixed components
import './components/globalsRegister';

import './plugins/vee-validate';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
