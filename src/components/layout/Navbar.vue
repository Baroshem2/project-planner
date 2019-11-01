<template>
    <nav class="nav-wrapper grey darken-3">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="brand-logo left">Vue-Project-Planner</router-link>
        <SignedInLinks v-if="user.loggedIn"/>
        <SignedOutLinks v-else/>
      </div>
    </nav>
</template>

<script>
    import SignedInLinks from '@/components/layout/SignedInLinks';
    import SignedOutLinks from '@/components/layout/SignedOutLinks';
    import { mapGetters } from 'vuex';

    export default {
        name: 'navbar',
        components: {
            SignedInLinks,
            SignedOutLinks
        },
        computed: {
          ...mapGetters({
            user: 'user'
          })
        }
    }
</script>

<style lang="scss" scoped>

</style>