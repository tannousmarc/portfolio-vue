<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {Navigation}
}
</script>

<template>
<div id="app">
  <Navigation></Navigation>
  <router-view/>
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
}
</style>
