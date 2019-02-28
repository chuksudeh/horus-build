import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stack: "",
    category: "",
    difficulty: "",
    userAnswers: [],
    grade: "",
    designchoice: ""
  },
  mutations: {
    //
  },

  // plugins: [
  //   createPersistedState({
  //     getState: key => Cookies.getJSON(key),
  //     setState: (key, state) =>
  //       Cookies.set(key, state, { expires: 3, secure: true })
  //   })
  // ],
  actions: {},
  getters: {}
});
