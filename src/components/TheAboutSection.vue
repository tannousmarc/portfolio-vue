<template>
<div id = "about">
  <span id = "about-left">
    <img src = "../assets/profile.jpg" />
  </span>
  <span id = "about-right">
    <p>
      I'm Marc Tannous, 2015 Google Grand Prize Winner, currently studying for a
      <a href = "http://www.bristol.ac.uk/study/undergraduate/2018/computer-science/meng-comp-sci/">
      Master of Engineering Degree in Computer Science
      </a>.<br />
      I'm currently based in Bristol, UK and available for remote work.<br />
      Here's a <router-link to = "projects">list of selected projects</router-link>
      that I've been hired to work on in the past few years. More work is available on request.<br />
    </p>
  </span>
</div>
</template>

<script>
export default {
  name: 'TheAboutSection',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #about{
    margin:0 20%;
    backgorund-color: #fefefe;
    padding: 5em 0;
    white-space: nowrap;
  }
  #about-left{
    display: inline-block;
    width: 45%;
    vertical-align: middle;
    white-space: normal;
  }
  #about-left img{
    border-radius: 50%;
  }
  #about-right{
    white-space: normal;
    display: inline-block;
    width: 55%;
    text-align: left;
    vertical-align: middle;
  }
  #about-right p{
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    color: #737373;
    font-size: 1.1em;
    line-height: 1.8em;
  }
  #about-right *{
    transition: all 0.1s ease-in-out;
  }
  #about-right a{
    background-color: rgba(255, 89, 100, 0.4);
    text-decoration: none;
    color: #222;
    padding: 0.15em 0.3em;
  }
  #about-right a:hover{
    cursor: pointer;
    cursor: hand;
    border-bottom: 4px solid #FF5964;
  }
</style>
