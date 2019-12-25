<template>
  <nav id = "nav-bar" v-bind:class="{ scroll: scrolled }" v-if = "!isMobile" role = "navigation">
    <div id = "nav-container">
      <span v-for = "item in items" :key = "item.id" class = "element">
        <router-link to='./home' v-if = "item.name === 'Logo'">
          <img src = "../assets/logo.png" />
        </router-link>
        <router-link :to="item.link" v-else>
          {{item.name}}
        </router-link>
      </span>
    </div>
  </nav>
  <nav id="navbar" class="navigation" role="navigation" v-else>
    <input id="toggle" type="checkbox" />
    <label class="hamburger" for="toggle">
      <div class="top"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
    </label>

    <nav class="menu">
      <router-link v-for = "item in items" :key = "item.id" :to="item.link" v-if = "item.name !== 'Logo'" class = "clickable">
        {{item.name}}
      </router-link>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      isMobile: false,
      scrolled: false,
      items: [
        {
          id: 1,
          name: 'Home',
          link: './home'
        },
        {
          id: 2,
          name: 'Projects',
          link: 'projects'
        },
        {
          id: 3,
          name: 'Logo',
          link: ''
        },
        {
          id: 4,
          name: 'Playground',
          link: 'playground'
        },
        {
          id: 5,
          name: 'Contact',
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
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (width < 900) {
      this.isMobile = true
    }
    window.addEventListener('scroll', this.debounce(this.handleScroll))
  },
  mounted () {
    const xs = document.getElementsByClassName('clickable')
    Array.prototype.forEach.call(xs, function (element) {
      element.addEventListener('click', function () {
        document.getElementById('toggle').checked = false
      })
    })
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
  background-color: #2f3640;
  margin: 0em;
  padding: 1em 0em;
}
.scroll{
  background-color: rgba(255,255,255, 0.9) !important;
  border-bottom: 1px solid gainsboro;
}
.scroll #nav-container .element{
  font-size: 0.9em !important;
}
.scroll #nav-container .element a{
  color: #222 !important;
}
.scroll #nav-container .element a:hover{
  color: #00a8ff !important;
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
  padding: 0;
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
  color: #00a8ff;
  cursor: pointer;
  cursor: hand;
}
#nav-bar #nav-container .element img{
  max-height: 65px
}

a {
  color: #fff;
  text-decoration: none;
}


/* Hamburger */
.hamburger {
  height: 45px;
  z-index: 120;
}

.hamburger div {
  background-color: #2f3640;
  position: relative;
  margin: 7px auto 0;
  width: 40px;
  height: 7px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.hamburger div:nth-child(3){
  margin-bottom: 20px;
}

#toggle {
  display: none;
}

#toggle:checked + .hamburger .top {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin-top: 22.5px;
}

#toggle:checked + .hamburger .meat {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: -7px;
}

#toggle:checked + .hamburger .bottom {
  -webkit-transform: scale(0);
  transform: scale(0);
}

#toggle:checked ~ .menu {
  height: 185px;
}

#navbar{
  position: fixed;
  top: 0px;
  z-index: 99999;
  width: 100%;
  background-color: #FEFEFE;
  padding-top: 10px;
}
.hamburger:hover{
  cursor:pointer;
  cursor:hand;
}
/* Menu */
.menu {
  width: 100%;
  background-color: #fefefe;
  margin: 0;
  padding: 0;
  clear: both;
  width: auto;
  text-align: center;
  height: 0px;
  overflow: hidden;
  transition: height .4s ease;
  z-index: 120;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.menu a{
  display: block;
  text-transform: uppercase;
  padding: 10px 0;
  font-size: 1.25em;
  border-bottom: 1px solid #222;
  color: #222;
}

.menu a:first-child {
}

.menu a:last-child {
  border-bottom: none;
}

.link {
  width: 100%;
  margin: 0;
  padding: 10px 0;
  font: 400 20px 'Montserrat', sans-serif;
  text-transform: uppercase;
}

.link:hover {
  background-color: #fff;
  color: #00a8ff;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
