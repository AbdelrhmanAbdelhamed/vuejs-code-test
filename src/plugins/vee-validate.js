import Vue from 'vue';

import {
  ValidationObserver,
  ValidationProvider,
  extend,
} from 'vee-validate';

import {
  required,
  email,
} from 'vee-validate/dist/rules';

extend('email', email);
extend('required', required);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
