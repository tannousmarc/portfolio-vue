
<template>
<transition name = "fade" mode = "out-in">
<div v-if = "loading" class = "loader" key="loading">
<BaseLoader />
</div>
<div v-else key="loaded">
<div id = "projectspage">
  <div class="grid" style = "padding-top: 10em">
    <div class="grid-item">muie</div>
    <div class="grid-item grid-item--width2">tie</div>
    <div class="grid-item">muie si mie</div>
    <div class="grid-item">muie</div>
    <div class="grid-item grid-item--width2">tie</div>
    <div class="grid-item">muie si mie</div>
  </div>
</div>
</div>
</transition>
</template>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>

<script>
import BaseLoader from './BaseLoader.vue'
export default {
  name: 'TheProjects',
  components: {BaseLoader},
  data () {
    return {
      loading: true
    }
  },
  mounted: function () {
    let self = this
    // TODO: Remove this setTimeout, demonstration purpose only
    setTimeout(function () {
      self.loading = false
      self.$emit('loaded', 1)
    }, 600)
  },
  beforeDestroy: function () {
    this.$emit('loaded', 0)
  }
}
</script>

<style scoped>
.grid-item { width: 300px; display: inline-block; background-color: green;}
.grid-item--width2 { width: 600px; }
.fade-enter, .fade-leave-to
{ opacity: 0; }
*{
  transition: all 0.25s ease-in-out;
}

#projectspage{
  background-color: #FEFEFE;
}
</style>
