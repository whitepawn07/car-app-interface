import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  strict: true,
  state: {
    token: null,
    isUserLogged: false,
    user: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      if (token != null) {
        state.isUserLogged = true;
      } else {
        state.isUserLogged = false;
      }
    },
    setUser (state, user) {
      state.user = user;
    }
  },
  getters: {
    getLogged: state => {
      return state.isUserLogged;
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token);
    },
    setUser ({ commit }, user) {
      commit('setUser', user);
    },
  }
});
