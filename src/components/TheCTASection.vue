<template>
<div id = "call-to-action">
  <BaseButton url = "/projects" text = "View More" class = "black"/>
</div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'TheCTASection',
  components: {BaseButton},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #call-to-action a{
    margin: 0 auto;
  }
  #call-to-action a button{
    float: none;
  }
</style>
