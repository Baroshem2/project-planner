<template>
    <div>
      <ul class="right">
        <li><router-link :to="{ name: 'create' }">New Project</router-link></li>
        <li><router-link :to="{ name: 'home' }">Log Out</router-link></li>
        <li><router-link :to="{ name: 'home' }" class="btn btn-floating pink lighten-1">NN</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'signed-in-links',
    }
</script>

<style lang="scss" scoped>

</style>