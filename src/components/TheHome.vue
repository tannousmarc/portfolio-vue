
<template>
<div id = "homepage">
  <TheHeroSection />
  <TheAboutSection />
  <TheProjectsSection />
</div>
</template>

<script>
import TheHeroSection from './TheHeroSection'
import TheAboutSection from './TheAboutSection'
import TheProjectsSection from './TheProjectsSection'
export default {
  name: 'TheHome',
  components: {TheHeroSection, TheAboutSection, TheProjectsSection},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
