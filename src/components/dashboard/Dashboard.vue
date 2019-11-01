<template>
      <div v-if="user.loggedIn" class="dashboard container">
        <div class="row">
          <div class="col s12 m6">
            <ProjectList :projects="projects" />
          </div>
          <div class="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
</template>

<script>
    import ProjectList from '@/components/projects/ProjectList';
    import Notifications from '@/components/dashboard/Notifications';
    import { mapGetters } from 'vuex';
    import firebase from 'firebase';

    export default {
        name: 'dashboard',
        components: {
            ProjectList,
            Notifications
        },
        data() {
            return {
                projects: []
            }
        },
        computed: {
          ...mapGetters({
            user: 'user'
          })
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
        },
    }
</script>

<style lang="scss" scoped>

</style>