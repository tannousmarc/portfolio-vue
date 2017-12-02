<template>
<nav id = "nav-bar" v-bind:class="{ scroll: scrolled }">
  <div id = "nav-container">
    <span v-for = "item in items" :key = "item.id" class = "element">
    <img v-if = "item.name === 'Logo'" src = "../assets/logo.png" />
    <router-link :to="item.link" v-else>
      {{item.name}}
    </router-link>
    </span>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      scrolled: false,
      items: [
        {
          id: 1,
          name: 'home',
          link: 'home'
        },
        {
          id: 2,
          name: 'projects',
          link: 'projects'
        },
        {
          id: 3,
          name: 'Logo',
          link: ''
        },
        {
          id: 4,
          name: 'playground',
          link: 'playground'
        },
        {
          id: 5,
          name: 'contact',
          link: 'contact'
        }
      ]
    }
  },
  methods: {
    debounce (func, wait, immediate) {
      let timeout
      return function () {
        let context = this
        let args = arguments
        let later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    },
    handleScroll () {
      console.log('called')
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    window.addEventListener('scroll', this.debounce(this.handleScroll))
  }
}
</script>

<style scoped>
  *{
    transition: all 0.25s;
  }
  #nav-bar{
    position: fixed;
    top: 0px;
    z-index: 999;
    width: 100%;
    background-color: #FF5964;
    margin: 0em;
    padding: 1em 0em;
  }
  .scroll{
    background-color: rgba(255,255,255, 0.9) !important;
  }
  .scroll #nav-container .element{
    font-size: 0.9em !important;
  }
  .scroll #nav-container .element a{
    color: #222 !important;
  }
  .scroll #nav-container{
    margin: 0em 20% !important;
  }
  #nav-bar #nav-container{
    margin: 0em 15%;
  }
  #nav-bar #nav-container .element{
    width: 20%;
    display: inline-block;
    text-align: center;
    margin: 0;
    pading: 0;
    vertical-align: middle;
    font-size: 1.1em;
    font-weight: 500;
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
