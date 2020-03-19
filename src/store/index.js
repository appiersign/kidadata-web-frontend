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
        user: null,
        error: false,
        error_message: ''
    },
    mutations: {
        SET_USER_DATA: function (state, user) {
            state.user = user;
            state.loggedIn = true;
            router.push({name: 'Home'}).then(r => {
                console.log(r)
            });
        },
        CLEAR_USER_DATA: function (state) {
            state.loggedIn = false;
            state.user = null;
            router.push({name: 'SignIn'}).then(r => {
                console.log(r)
            });
        },
        SET_ERROR_MESSAGE: function (state, message) {
            state.error = true;
            state.error_message = message;
        },
        CLEAR_ERROR_MESSAGE: function (state) {
            state.error = false;
            state.error_message = '';
        }
    },
    actions: {
        signUp: function ({commit}, payload) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                    commit('SET_USER_DATA', {email: response.user.email, uid: response.user.uid});
                })
                .catch(error => {
                    commit('SET_ERROR_MESSAGE', error.message);
                });
        },
        signIn: function ({commit}, payload) {
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                    commit('SET_USER_DATA', {email: response.user.email, uid: response.user.uid});
                })
                .catch(error => {
                    commit('SET_ERROR_MESSAGE', error.message);
                });
        },
        signOut: function ({commit}) {
            return firebase.auth().signOut().then(() => {
                commit('CLEAR_USER_DATA');
            });
        },
        setErrors: function({commit}, message) {
            commit('SET_ERROR_MESSAGE', message);
        },
        resetErrors: function ({commit}) {
            if (this.state.error) {
                commit('CLEAR_ERROR_MESSAGE');
            }
        }
    },
    modules: {}
})
