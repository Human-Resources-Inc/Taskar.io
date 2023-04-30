import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false,
    jwt: '',
  },
  mutations: {
    setToken(state, jwt) {
      state.isLoggedIn = true;
      state.jwt = jwt;
    },
    clearToken(state) {
      state.isLoggedIn = false;
      state.jwt = '';
    },
  },
  actions: {
    login({ commit }, jwt) {
      localStorage.setItem('jwt', jwt);
      commit('login', jwt);
    },
    logout({ commit }) {
      localStorage.removeItem('jwt');
      commit('logout');
    },
    checkLogin({ state, commit }) {
      const jwt = localStorage.getItem('jwt');

      if (jwt) {
        // Check if token is still valid
        const decodedToken = JSON.parse(atob(jwt.split('.')[1]));
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          commit('login', jwt);
        } else {
          commit('logout');
        }
      } else {
        commit('logout');
      }
    },
  },
});
