
<template>
<div id = "homepage">
  <Hero />
  <About />
</div>
</template>

<script>
import Hero from './Hero'
import About from './About'
export default {
  name: 'Homepage',
  components: {Hero, About},
  data () {
    return {
      msg: 'muie la gabori'
    }
  }
}
</script>

<style scoped>
</style>
