<template>
      <div class="container">
        <form class="transparent" @submit.prevent="signUpUser()">
          <h3 class="white-text">Sign Up</h3>
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
        <div v-if="error">{{ error }}</div>
      </div>
</template>

<script>
  import firebase from 'firebase/app'

    export default {
      name: 'sign-up',
        data() {
            return {
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                error: ""
            }
        },

        computed: {
          fullName() {
            return this.firstName + " " + this.lastName;
          }
        },

        methods: {
            signUpUser() {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(this.email, this.password)
                  .then(data => {
                    data.user.updateProfile({
                      displayName: this.fullName
                    })
                    .then(() => {
                      this.error = ''
                      this.$router.replace({ name: 'dashboard' })
                      })
                  })
                  .catch(err => {
                    console.log(err);
                    this.error = err;
                  });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>