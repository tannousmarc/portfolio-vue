
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
import BaseButton from './BaseButton'
export default {
  name: 'TheHome',
  components: {TheHeroSection, TheAboutSection, TheProjectsSection, BaseButton},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
