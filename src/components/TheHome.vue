
<template>
<transition name = "fade" mode = "out-in">
<div v-if = "loading" class = "loader" key="loading">
<BaseLoader />
</div>
<div v-else key="loaded">
<div id = "homepage">
<TheHeroSection />
<TheAboutSection />
<TheProjectsSection />
<TheCTASection />
</div>
</div>
</transition>
</template>

<script>
import TheCTASection from './TheCTASection.vue'
import TheHeroSection from './TheHeroSection.vue'
import TheAboutSection from './TheAboutSection.vue'
import TheProjectsSection from './TheProjectsSection.vue'
import BaseButton from './BaseButton.vue'
import BaseLoader from './BaseLoader.vue'
export default {
  name: 'TheHome',
  components: {TheHeroSection, TheAboutSection, TheProjectsSection, BaseButton, TheCTASection, BaseLoader},
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
    }, 300)
  },
  beforeDestroy: function () {
    this.$emit('loaded', 0)
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to
{ opacity: 0; }
*{
  transition: all 0.25s ease-in-out;
}
</style>
