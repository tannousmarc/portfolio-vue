<template>
  <div>
    <div class = "fourohfour">
      <h1>😅</h1>
      This page is under development. Please check back soon.
      <br />
      <BaseButton url = "/" text = "Home" class = "black four"/>
    </div>

  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'The404',
  components: {BaseButton},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.fourohfour{
  padding: 12em 15% 5em;
  height: 15em;
  background-color: #fefefe;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #737373;
  font-size: 1.1em;
  line-height: 1.8em;
}
h1{
  font-size: 3em;
}
</style>
