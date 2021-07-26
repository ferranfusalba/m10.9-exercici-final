import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        pictures: [],
        input: '',
    },
    getters: {
        users(state) {
            return state.users;
        },
        getUser(state) {
            return state.users.filter(user => user.name.toLowerCase().includes(state.input.toLowerCase()))
        },
        usersConsulted(state) {
            return state.users.filter(user => user.counter > 0)
        },
        pictures(state) {
            return state.pictures;
        },
        albumsConsulted(state) {
            return state.pictures.filter(album => album.counter > 0)
        },
        getInput(state) {
            return state.input
        },
    },
    mutations: {
        addInput(state, input2) {
            state.input = input2;
        },
        removeInput(state) {
            state.input = ''
        },
        increment(state, selection) {
            selection.counter++;
            state.input = ''
        },
        setUsers(state, users) {
            if (state.users.length === 0) {
                state.users = users;
                state.users.counter = 0;
            }
        },
        setPictures(state, pictures) {
            if (state.pictures.length === 0) {
                state.pictures = pictures;
                state.pictures.counter = 0;
            }
        },
    },
    actions: {
        getUsers({ commit }) {
            axios.get('http://jsonplaceholder.typicode.com/users')
                .then(response => {
                    response.data.forEach(item => item.counter = 0);
                    commit('setUsers', response.data);
                })
        },
        getPictures({ commit }) {
            axios.get('http://jsonplaceholder.typicode.com/photos')
                .then(response => {
                    response.data.forEach(item => item.counter = 0);
                    commit('setPictures', response.data);
                })
        },
    }
})