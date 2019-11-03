<template>
    <div class="section">
      <div class="card z-depth-0">
          <div class="card-content">
              <span class="card-title">Notifications</span>
              <ul class="notifications" v-if="notifications">
                  <li v-for="notification in notifications" :key="notification.id">
                      <span class="pink-text">{{ notification.user }} </span>
                      <span>{{ notification.content }}</span>
                      <div class="grey-text note-date">
                          {{ moment(notification.time.toDate()).fromNow() }}
                      </div>
                      <a class="btn-floating btn-small waves-effect waves-light red accent-3" @click="deleteNotification(notification.id)"><i class="material-icons">delete</i></a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment';
import firebase from 'firebase';

    export default {
        name: 'notifications',
        props: ['notifications'],
        methods: {
            moment(param) {
                return moment(param);
            },

            deleteNotification(id) {
                firebase.firestore().collection("notifications").doc(id).delete()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>