<template>
    <div>
      <ul class="right">
        <li><router-link :to="{ name: 'create' }">New Project</router-link></li>
        <li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
        <li><a @click.prevent="signOut()">Log Out</a></li>
        <li><router-link :to="{ name: 'home' }" class="btn btn-floating pink lighten-1">JJ</router-link></li>
      </ul>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'signed-in-links',
        methods: {
          signOut() {
            firebase.auth().signOut().then(() => {
              this.$router.replace({
                name: "home"
              });
            })
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>