<template>
    <div class="container section project-details">
      <div class="card z-depth-0">
        <div class="card-content">
          <span class="card-title">{{ getProjectById.title }}</span>
          <p class="card-content">{{ getProjectById.description }}</p>
          <a class="btn-floating btn-large waves-effect waves-light red accent-3" @click="deleteProject()"><i class="material-icons">delete</i></a>
        </div>
        <div class="card-action grey lighten-4 grey-text">
          <div>Posted by {{ getProjectById.createdBy }}</div>
          <div>{{ moment(getProjectById.createdAt.toDate()).calendar() }}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import firebase, { firestore } from "firebase";
  import moment from 'moment';
  // import { mapGetters } from 'vuex';

    export default {
        name: 'project-details',

        data() {
            return {
                projects: []
            }
        },


        computed: {
          // ...mapGetters([
          //   'projects'
          // ]),

          getProjectById() {
            return this.projects ? this.projects.find(project => project.id === this.$route.params.id) : null;
          }
        },

        methods: {
          fetchProjects() {
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

          moment(param) {
            return moment(param);
          },

          deleteProject() {
            firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).collection("projects").doc(this.$route.params.id).delete().then(() => {
              M.toast({html: `Project deleted!`})
              this.$router.replace({ name: 'dashboard' });
            });
          }
        },

        created() {
          this.fetchProjects();
          // this.$store.dispatch('fetchProjects');
          console.log(this.projects)
        }
    }
</script>

<style lang="scss" scoped>

</style>