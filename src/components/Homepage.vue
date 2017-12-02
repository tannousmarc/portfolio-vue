
<template>
  <Hero />
</template>

<script>
import Hero from './Hero'
export default {
  name: 'Homepage',
  components: {Hero},
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
