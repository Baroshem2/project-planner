<template>
    <div class="card z-depth-0 project-summary" @click="openProject()">
      <div class="card-content grey-text text-darken-3">
        <span class="card-title ">{{ project.title }}</span>
        <p class="card-content">Posted by {{ project.createdBy }}</p>
        <p class="grey-text">{{ moment(project.createdAt.toDate()).calendar() }}</p>
      </div>
    </div>
</template>

<script>
  import moment from 'moment';
    export default {
        name: 'project-summary',
        props: ['project'],

        methods: {
          openProject() {
            this.$router.push({ name: 'projectId', params: { id: this.project.id }});
          },

          moment(param) {
            return moment(param);
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>