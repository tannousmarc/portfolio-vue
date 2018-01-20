<template>
<div id = "hero">
  <h1>{{title}}</h1>
  <h2>{{subtitle}}</h2>
</div>
</template>

<script>
export default {
  name: 'TheHeroSection',
  data () {
    return {
      title: 'Developer and designer living in Bristol,',
      subtitle: 'currently working for J.P.Morgan.'
    }
  }
}
</script>

<style scoped>
#hero{
  width: 100%;
  background-color: #FF5964;
  padding: 14em 0;
  top: 0;
  z-index: 0;
  color: #fefefe;
}
h1{
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
  color: #fcfcfc;
  text-shadow : 0 1px 2px rgba(0,0,0,0.10);
}
h2{
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
  color: #fcfcfc;
  text-shadow : 0 1px 2px rgba(0,0,0,0.10);
}
</style>
