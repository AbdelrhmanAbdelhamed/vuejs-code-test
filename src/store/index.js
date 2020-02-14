import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createCache from 'vuex-cache';

import modules from './modules';

Vue.use(Vuex);

export default new Store({
  plugins: [
    createCache({ timeout: 5 * 60 * 1000 }),
  ],
  modules,
  strict: process.env.NODE_ENV !== 'production',
});
