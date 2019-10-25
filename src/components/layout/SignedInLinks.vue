<template>
    <div v-if="user">;
      <ul class="right">
        <li><router-link :to="{ name: 'create' }">New Project</router-link></li>
        <li><router-link :to="{ name: 'home' }" @click="signOut()">Log Out</router-link></li>
        <li><router-link :to="{ name: 'home' }" class="btn btn-floating pink lighten-1">{{ userInitials }}</router-link></li>
      </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import firebase from 'firebase/app';

    export default {
        name: 'signed-in-links',
        computed: {
          ...mapGetters({
            user: 'user'
          }),

          userInitials() {
            return this.user ? this.user.displayName.charAt(0) : null;
          }
        },
        methods: {
          signOut() {
            firebase
              .auth()
              .signOut()
              .then(() => {
                this.$router.replace({
                  name: 'home'
                })
              })
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>