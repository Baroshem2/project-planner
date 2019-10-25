<template>
      <div class="dashboard container">
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
    export default {
        name: 'dashboard',
        components: {
            ProjectList,
            Notifications
        },
        data() {
            return {
                projects: [
                    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
                    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
                    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>