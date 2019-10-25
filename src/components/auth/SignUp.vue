<template>
      <div class="container">
        <form class="white" @submit.prevent="signUpUser()">
          <h5 class="grey-text text-darken-3">Sign Up</h5>
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" id='email' v-model="email" />
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" id='password' v-model="password" />
          </div>
        <div class="input-field">
            <label for="firstName">First Name</label>
            <input type="text" id='firstName' v-model="firstName" />
          </div>
        <div class="input-field">
            <label for="lastName">Last Name</label>
            <input type="text" id='lastName' v-model="lastName" />
          </div>
          <div class="input-field">
            <button class="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
</template>

<script>
    export default {
      name: 'sign-up',
        data() {
            return {
                email: "",
                password: "",
                firstName: "",
                lastName: ""
            }
        },

        methods: {
            signUpUser() {
                console.log(this.email, this.password, this.firstName, this.lastName);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>