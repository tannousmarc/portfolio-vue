
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
  h1{
    margin: 0;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
</style>
