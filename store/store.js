import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    const localStorage = "";
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

export const store = () => {
  return new Vuex.Store({
    state: {
      nicknames: storage.fetch()
    },
    mutations: {
      addOneUser(state, nickname) {
        debugger;
        const obj = { item: nickname };
        localStorage.setItem(nickname, JSON.stringify(obj));
        state.nicknames.push(obj);
        console.log(obj);
      },
      removeOneUser(state, payload) {
        localStorage.removeItem(payload.nickname.item);
        state.nicknames.splice(payload.index, 1);
      },
      clearAllUsers(state) {
        localStorage.clear();
        state.nicknames = [];
      }
    }
  });
};

export default store;
