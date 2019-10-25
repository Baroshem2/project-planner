<template>
      <div class="container">
        <form class="white" @submit.prevent="createProject()">
          <h5 class="grey-text text-darken-3">Create a New Project</h5>
          <div class="input-field">
            <input type="text" id='title' v-model="title" />
            <label for="title">Project Title</label>
          </div>
          <div class="input-field">
            <textarea id="content" class="materialize-textarea" v-model="content"></textarea>
            <label for="content">Project Content</label>
          </div>
          <div class="input-field">
            <button class="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
</template>

<script>
    export default {
        name: 'create-project',
        data() {
            return {
                title: '',
                content: ''
            }
        },

        methods: {
            createProject() {
                console.log(this.title, this.content);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>