import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import useritem from '@/store/modules/useritem';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    useritem
  }
});
