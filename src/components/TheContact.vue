<template>
<transition-group name = "fade" mode = "out-in">
<div v-if = "loading" class = "loader" key="loading">
  <BaseLoader />
</div>
<div v-else key="loaded">
  <div id = "contactpage">
    <h1>salutari</h1>
    <form action="../assets/form.php" method="post">
      <div class="field name-box">
          <input type="text" id="name" name="name" placeholder="What's your name?"/>
          <label for="name" id="labelname">Name</label>
      </div>

      <div class="field email-box">
          <input type="text" id="email" name="email" placeholder="What's your e-mail?"/>
          <label for="email" id="labelemail">Email</label>
      </div>
      <div class="field msg-box">
          <textarea id="msg" rows="4" name="message" placeholder="Tell me about your project.."></textarea>
          <label for="msg" class="formToggle" id="labelmsg">Message...</label>
      </div>

      <input class="button" type="submit" value="Send" />
    </form>
  </div>
</div>
</transition-group>
</template>

<script>
import BaseLoader from './BaseLoader.vue'
export default {
  name: 'TheContact',
  components: {BaseLoader},
  data () {
    return {
      loading: true
    }
  },
  mounted: function () {
    let self = this
    setTimeout(function () {
      self.loading = false
      self.$emit('loaded', 1)
    }, 300)
  },
  beforeDestroy: function () {
    this.$emit('loaded', 0)
  },
  methods: {
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to
{ opacity: 0; }
*{
  transition: all 0.25s ease-in-out;
}
#contactpage{
  padding: 10em 20em 3em;
  background-color: #EEE;
}

</style>
