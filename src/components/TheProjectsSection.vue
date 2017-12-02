<template>
<div id = "projects">
  <div class = "homepage-project" v-for = "project in projects" :key = "project.id">
    {{project.title}}
  </div>
</div>
</template>

<script>
export default {
  name: 'TheProjectsSection',
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Mue proiect 1'
        },
        {
          id: 2,
          title: 'Si al doilea'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
