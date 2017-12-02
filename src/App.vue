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
@import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
}
</style>
