
<template>
<div id = "homepage">
  <TheHeroSection />
  <TheAboutSection />
  <TheProjectsSection />
  <TheCTASection />
</div>
</template>

<script>
import TheCTASection from './TheCTASection.vue'
import TheHeroSection from './TheHeroSection.vue'
import TheAboutSection from './TheAboutSection.vue'
import TheProjectsSection from './TheProjectsSection.vue'
import BaseButton from './BaseButton.vue'
export default {
  name: 'TheHome',
  components: {TheHeroSection, TheAboutSection, TheProjectsSection, BaseButton, TheCTASection},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
