<template>
      <div v-if="user.loggedIn" class="dashboard container">
        <div class="row">
          <div class="col s12 m6">
            <ProjectList :projects="projects" />
          </div>
          <div class="col s12 m5 offset-m1">
            <Notifications :notifications="notifications"/>
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
                projects: [],
                notifications: []
            }
        },
        computed: {
          ...mapGetters([
            'user'
          ])
        },

        methods: {
          async fetchProjects() {
            var projectsRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('projects').orderBy('createdAt', 'desc');
            projectsRef.onSnapshot(snap => {
              this.projects = [];
              snap.forEach(doc => {
                var project = doc.data();
                project.id = doc.id;
                this.projects.push(project);
              })
            })
          },

          fetchNotifications() {
            var notificationsRef = firebase.firestore().collection('notifications').orderBy('time', 'desc');

            notificationsRef.onSnapshot(snap => {
              this.notifications = [];
              snap.forEach(doc => {
                var notification = doc.data();
                notification.id = doc.id;
                this.notifications.push(notification);
                console.log(this.notifications);
              })
            })
          }
        },

        created() {
          this.fetchProjects();
          this.fetchNotifications();
        },
    }
</script>

<style lang="scss" scoped>

</style>