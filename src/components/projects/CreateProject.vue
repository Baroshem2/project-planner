<template>
      <div class="container">
        <form class="transparent" @submit.prevent="createProject()">
          <h3 class="white-text">Create a New Project</h3>
          <div class="input-field">
            <input type="text" id='title' v-model="title" class="white-text"/>
            <label for="title">Project Title</label>
          </div>
          <div class="input-field">
            <textarea id="content" class="materialize-textarea white-text" v-model="content" ></textarea>
            <label for="content">Project Content</label>
          </div>
          <div class="input-field">
            <button class="btn pink lighten-1">Create</button>
          </div>
        </form>
        <div v-if="error" class="white-text">{{ error }}</div>
      </div>
</template>

<script>
  import firebase from "firebase";

    export default {
        name: 'create-project',
        data() {
            return {
                title: '',
                content: '',
                error: ''
            }
        },

        methods: {
            createProject() {
              if(this.title && this.content) {
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('projects').add({
                  title: this.title,
                  description: this.content,
                  createdAt: new Date(),
                  createdBy: firebase.auth().currentUser.displayName
                });
                M.toast({html: `Project ${this.title} created!`})
                this.$router.replace({ name: 'dashboard' });
              } else {
                this.error = "Title or Content cannot be empty"
              }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>