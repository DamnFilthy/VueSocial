<template>
    <h2>Страница Login</h2>
    <AppValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"/>
    <form @submit.prevent="onSubmit">
        <div>
            <div>
                {{ localComputed }}
            </div>
            <span>
                Email
            </span>
            <input type="text" v-model="email">
        </div>
        <div>
            <span>
                Password
            </span>
            <input type="password" v-model="password">
        </div>
        <button :disabled="isSubmitting">Войти</button>
    </form>
    <div v-if="isLoading"> <Spinner/> </div>
</template>

<script>
    import Spinner from "../components/Spinner";
    import {actionTypes} from "../store/modules/auth";
    import AppValidationErrors from "../components/ValidationErrors";
    import { mapState } from 'vuex';

    export default {
        name: "Login",
        components: {
            AppValidationErrors,
            Spinner
        },
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            onSubmit(){
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch(actionTypes.login,
                    user).then(response => {
                    console.log('success', response)
                })
            }
        },
        computed: {
            ...mapState({
                isSubmitting: state => state.auth.isSubmitting,
                isLoading: state => state.auth.loading,
                validationErrors: state => state.auth.validationErrors,
            }),
            localComputed(){
                return this.email
            }
        },
    }
</script>

<style scoped>

</style>