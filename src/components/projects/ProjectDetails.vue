<template>
    <div class="container section project-details">
      <div class="card z-depth-0">
        <div class="card-content">
          <span class="card-title">Project title - {{ $route.params.id }}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div class="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'project-details'
    }
</script>

<style lang="scss" scoped>

</style>