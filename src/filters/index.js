import Vue from 'vue';
import { startCase } from '@/utils';

Vue.filter('startCase', (string) => startCase(string));
