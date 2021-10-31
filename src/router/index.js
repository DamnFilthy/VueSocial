import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register"
import About from "../views/About"
import Login from "../views/Login";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
