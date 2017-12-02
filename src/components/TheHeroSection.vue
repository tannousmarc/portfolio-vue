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
      title: 'I\'m Marc. I design and build fun stuff.',
      subtitle: 'Still looking for a cool job title.'
    }
  }
}
</script>

<style scoped>
#hero{
  width: 100%;
  background-color: #FF5964;
  padding: 15em 0;
  top: 0;
  z-index: 0;
  color: #fefefe;
}
h1{
  font-weight: 300;
  font-size: 3.5em;
  margin: 0;
}
h2{
  font-weight: 200;
  font-size: 2em;
  margin: 0;
}
</style>
