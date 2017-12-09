<script>
import NavigationBar from './components/NavigationBar'
import FooterSection from './components/FooterSection'
export default {
  name: 'app',
  components: {NavigationBar, FooterSection}
}
</script>

<template>
<div id="app">
  <NavigationBar/>
  <router-view/>
  <FooterSection />
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
}
</style>
