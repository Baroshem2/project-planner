<template>
    <div>
      <ul class="right">
        <li><router-link :to="{ name: 'signup' }">Signup</router-link></li>
        <li><router-link :to="{ name: 'signin' }">Login</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'signed-out-links'
    }
</script>

<style lang="scss" scoped>

</style>