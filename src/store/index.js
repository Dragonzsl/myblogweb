import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: window.sessionStorage.getItem("token"),
        userInfo: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            window.sessionStorage.setItem("token", token);
        },
        removeToken(state) {
            state.token = "";
            state.userInfo = null;
            window.sessionStorage.removeItem("token");
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
    },
    actions: {}
});

export default store;