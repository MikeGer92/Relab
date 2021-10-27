import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import home from '@/store/modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    home
  }
});
