<template>
    <nav class="nav-wrapper grey darken-3">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="brand-logo">Vue-Project-Planner</router-link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
</template>

<script>
    import SignedInLinks from '@/components/layout/SignedInLinks';
    import SignedOutLinks from '@/components/layout/SignedOutLinks';

    export default {
        name: 'navbar',
        components: {
            SignedInLinks,
            SignedOutLinks
        }

    }
</script>

<style lang="scss" scoped>

</style>