<template>
    <ul class="right hide-on-med-and-down">
      <li><router-link :to="{ name: 'signup' }">Sign Up</router-link></li>
      <li><router-link :to="{ name: 'signin' }">Sign In</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: 'signed-out-links'
    }
</script>

<style lang="scss" scoped>

</style>