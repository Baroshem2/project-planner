<template>
    <div class="card z-depth-0 project-summary" @click="openProject()">
      <div class="card-content grey-text text-darken-3">
        <span class="card-title ">{{ project.title }}</span>
        <p>Posted by {{ project.createdBy }}</p>
        <p class="grey-text">{{ date }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'project-summary',
        props: ['project'],

        computed: {
          date() {
            return new Date(this.project.createdAt.seconds * 1000);
          }
        },

        methods: {
          openProject() {
            this.$router.push({ name: 'projectId', params: { id: this.project.id }});
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>