<script>
import NavigationBar from './components/NavigationBar'
export default {
  name: 'app',
  components: {NavigationBar}
}
</script>

<template>
<div id="app">
  <NavigationBar/>
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
  overflow-y: scroll;
}
</style>
