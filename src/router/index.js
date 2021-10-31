import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register"
import About from "../views/About"
import Login from "../views/Login";
import CreateArticle from "../views/CreateArticle";
import Settings from "../views/Settings";
import UserProfile from "../views/UserProfile";

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
    {
        path: '/createArticle',
        name: 'createArticle',
        component: CreateArticle
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/userProfile',
        name: 'userProfile',
        component: UserProfile
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
