<template>
        <nav class="navbar navbar-light">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">
                    Social
                </router-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li>
                        <router-link
                                :to="{name: 'home'}"
                                exact
                                class="nav-link"
                                active-class="active"
                                >
                            Home
                        </router-link>
                    </li>
                    <template v-if="isLoggedIn">
                        <li>
                            <router-link
                                    :to="{name: 'createArticle'}"
                                    class="nav-link"
                                    active-class="active">
                                <i class="fas fa-pen"></i>
                                New Article
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    :to="{name: 'settings'}"
                                    class="nav-link"
                                    active-class="active">
                                <i class="fas fa-cog"></i>
                                Settings
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    :to="{name: 'userProfile', params: {slug: currentUser.username}}"
                                         class="nav-link"
                                    active-class="active">
                                <img class="user-pic" :src="currentUser.image" alt="user-img">
                                {{currentUser.username}}
                            </router-link>
                        </li>
                    </template>
                    <template v-if="isAnonymous">
                        <li>
                            <router-link
                                    :to="{name: 'login'}"
                                    class="nav-link"
                                    active-class="active">
                                <i class="fas fa-sign-in-alt"></i>
                                Login
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    :to="{name: 'register'}"
                                    class="nav-link"
                            active-class="active">
                                <i class="fas fa-power-off"></i>
                                Register
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
</template>

<script>
    import {getterTypes} from "../store/modules/auth";
    import {mapGetters} from "vuex"

    export default {
        name: "Topbar",
        computed: {
            ...mapGetters({
                currentUser: getterTypes.currentUser,
                isLoggedIn: getterTypes.isLoggedIn,
                isAnonymous: getterTypes.isAnonymous
            })
            // currentUser(){
            //     return this.$store.getters[getterTypes.currentUser]
            // },
            // isLoggedIn(){
            //     return this.$store.getters[getterTypes.isLoggedIn]
            // },
            // isAnonymous(){
            //     return this.$store.getters[getterTypes.isAnonymous]
            // }
        }
    }
</script>

<style>
    .navbar-nav{
        flex-direction: row;
    }
    .navbar-nav li{
        margin-right: 15px;
    }
    .user-pic{
        border-radius: 100px;
        width: 33px;
    }
</style>