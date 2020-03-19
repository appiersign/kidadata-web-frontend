import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import firebase from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: localStorage
        })
    ],
    state: {
        loggedIn: false,
        user: null
    },
    mutations: {
        SET_USER_DATA: function (state, user) {
            state.user = user;
            state.loggedIn = true;
            router.push({ name: 'Home' }).then(r => {console.log(r)});
        },
        CLEAR_USER_DATA: function (state) {
            state.loggedIn = false;
            state.user = null;
            router.push({ name: 'SignIn' }).then(r => {console.log(r)});
        }
    },
    actions: {
        signIn: function ({commit}, payload) {
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                    commit('SET_USER_DATA', {email: response.user.email, uid: response.user.uid});
                });
        },
        signOut: function ({commit}) {
            return firebase.auth().signOut().then(() => {
                commit('CLEAR_USER_DATA');
            });
        }
    },
    modules: {}
})
