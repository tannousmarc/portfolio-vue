<template>
<nav id = "nav-bar">
  <div id = "nav-container">
    <span v-for = "item in items" class = "element">
    <img v-if = "item === 'Logo'" src = "../assets/logo.png" />
    <router-link :to="item" v-else>
      {{item}}
    </router-link>
    </span>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      items: ['home', 'projects', 'Logo', 'playground', 'contact']
    }
  }
}
</script>

<style scoped>
  *{
    transition: all 0.35s;
  }
  #nav-bar{
    width: 100%;
    background-color: #e74c3c;
    margin: 0em;
    padding: 1em 0em;
  }
  #nav-bar #nav-container{
    margin: 0em 25em;
  }
  #nav-bar #nav-container .element{
    width: 20%;
    display: inline-block;
    text-align: center;
    margin: 0;
    pading: 0;
    vertical-align: middle;
    font-size: 0.9em;
  }
  #nav-bar #nav-container .element a{
    color: #fefefe;
    text-transform: uppercase;
    text-decoration: none;
  }
  #nav-bar #nav-container .element a:hover{
    color: #222;
    cursor: pointer;
    cursor: hand;
  }
  #nav-bar #nav-container .element img{
    max-height: 65px
  }
</style>
