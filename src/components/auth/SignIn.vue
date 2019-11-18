<template>
      <div class="container">
        <form class="transparent" @submit.prevent="signInUser()">
          <h3 class="white-text">Sign In</h3>
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" id='email' name="email" value required autofocus v-model="email" class="white-text"/>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" id='password' name="password" required autocomplete="off" v-model="password" class="white-text" />
          </div>
          <div class="input-field">
            <button class="btn pink lighten-1 z-depth-0">Sign In</button>
          </div>
        </form>
        <div v-if="error" class="white-text">{{ error }}</div>
      </div>
</template>

<script >
  import firebase from 'firebase/app';

    export default {
        name: 'sign-in',
        data() {
            return {
                email: "",
                password: "",
                error: ""
            }
        },

        methods: {
            signInUser() {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(this.email, this.password)
                  .then(data => {
                    this.$router.replace({ name: 'dashboard'})
                  })
                  .catch(err => {
                    this.error = err;
                    console.log(err);
                  })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>