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
  import firebase from "firebase";

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
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('projects').add({
                  title: this.title,
                  description: this.content,
                  createdAt: new Date(),
                  createdBy: firebase.auth().currentUser.displayName
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>