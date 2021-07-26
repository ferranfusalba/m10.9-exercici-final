import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: () =>
            import ( /* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/users/:id',
        name: 'User',
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/User.vue')
    },
    {
        path: '/pictures',
        name: 'Albums',
        component: () =>
            import ( /* webpackChunkName: "pictures" */ '../views/Albums.vue')
    },
    {
        path: '/pictures/:id',
        name: 'Album',
        component: () =>
            import ( /* webpackChunkName: "album" */ '../views/Album.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router