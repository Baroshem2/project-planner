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
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        name: 'notifications',
        props: ['notifications'],
        methods: {
            moment() {
                return moment();
            }
        },

        mounted() {
            console.log(this.notifications);
        }

    }
</script>

<style lang="scss" scoped>

</style>