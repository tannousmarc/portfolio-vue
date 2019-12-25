<script>
import NavigationBar from './components/NavigationBar'
import FooterSection from './components/FooterSection'
export default {
  name: 'app',
  components: {NavigationBar, FooterSection},
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    loadFooter: function (id) {
      let self = this
      if (id === 1) {
        self.loaded = true
      } else {
        // navigated away, unload footer to re-calculate bottom
        this.loaded = false
      }
    }
  }

}
</script>

<template>
<div id="app">
  <NavigationBar/>
  <router-view v-on:loaded = "loadFooter" />
  <FooterSection v-if = "loaded" />
</div>
</template>



<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700|Work+Sans:300,400,600,700');
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  text-rendering: optimizeLegibility;
}
body{
  margin: 0px;
  overflow-y: scroll;
  background-color: #2f3640;

}

</style>
