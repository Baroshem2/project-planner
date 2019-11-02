<template>
    <div class="container section project-details">
      <div class="card z-depth-0">
        <div class="card-content">
          <span class="card-title">{{ getProjectById.title }}</span>
          <p class="card-content">{{ getProjectById.description }}</p>
        </div>
        <div class="card-action grey lighten-4 grey-text">
          <div>Posted by {{ getProjectById.createdBy }}</div>
          <div>{{ date }}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import firebase from "firebase";

    export default {
        name: 'project-details',

        data() {
            return {
                projects: []
            }
        },

        computed: {
          getProjectById() {
            return this.projects ? this.projects.find(project => project.id === this.$route.params.id) : null;
          },
          date() {
            return new Date(this.getProjectById.createdAt.seconds * 1000);
          }
        },

        methods: {
          async fetchProjects() {
            var projectsRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('projects');

            projectsRef.onSnapshot(snap => {
              this.projects = [];
              snap.forEach(doc => {
                var project = doc.data();
                project.id = doc.id;
                this.projects.push(project);
              })
            })
          },
        },

        created() {
          this.fetchProjects();
        }
    }
</script>

<style lang="scss" scoped>

</style>