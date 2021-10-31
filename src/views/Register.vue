<template>
  <div>
      <h1>REGISTER PAGE</h1>
  </div>
    <p>
        <!--<router-link :to="{name:'login'}">Логин</router-link>-->
        you have an account?
    </p>
    <AppValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"/>
    <form @submit.prevent="onSubmit">
        <div>
            <input type="text" placeholder="username" v-model="name">
        </div>
        <div>
            <input type="text" placeholder="email" v-model="email">
        </div>
        <div>
            <input type="password" placeholder="password" v-model="password">
        </div>
        <div>
            <button :disabled="isSubmitting">Зарегистрироваться</button>
        </div>
    </form>
    <div v-if="isLoading"> <Spinner/> </div>
</template>

<script>
    import AppValidationErrors from '@/components/ValidationErrors'
    import {actionTypes} from "../store/modules/auth";
    import Spinner from "../components/Spinner";
    import { mapState } from 'vuex';

    export default {
    name: 'AppRegister',
    components: {
        Spinner,
        AppValidationErrors
    },
    data(){
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    computed: {
        ...mapState({
            isSubmitting: state => state.auth.isSubmitting,
            isLoading: state => state.auth.loading,
            validationErrors: state => state.auth.validationErrors,
            currentUser: state => state.auth.currentUser,
        }),
    },
    methods: {
        onSubmit(){
            this.$store.dispatch(actionTypes.register,
                {email: this.email,
                username: this.name,
                password: this.password}).then(user => {
                    console.log('success', user)
                    this.$router.push({name: 'home'})
            })
        }
    },
}
</script>