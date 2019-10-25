<template>
      <div class="container">
        <form class="white" @submit.prevent="signInUser()">
          <h5 class="grey-text text-darken-3">Sign In</h5>
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" id='email' v-model="email" />
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" id='password' v-model="password" />
          </div>
          <div class="input-field">
            <button class="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
</template>

<script>
    export default {
        name: 'sign-in',
        data() {
            return {
                email: "",
                password: ""
            }
        },

        methods: {
            sigInUser() {
                console.log(this.email, this.password);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>