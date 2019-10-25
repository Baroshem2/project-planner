<template>
    <div class="project-list section">
        <ProjectSummary v-for="(project, key) in projects" :key="key" />
    </div>
</template>

<script>
    import ProjectSummary from '@/components/projects/ProjectSummary';

    export default {
        name: 'project-list',
        props: ['projects'],
        components: {
            ProjectSummary
        }
    }
</script>

<style lang="scss" scoped>

</style>