<template>
<div id = "about">
  <span id = "about-left">
    <img src = "../assets/profile.jpg" />
  </span>
  <span id = "about-right">
    <p>
      I'm Marc Tannous, 2015 Google Grand Prize Winner, currently studying for a Master of Engineering Degree in Computer Sciences.<br />
      I'm currently based in Bristol, UK and available for remote work.<br />
      Here's a list of selected projects that I've been hired to work on in the past few years. More work is available on request.<br />
    </p>
  </span>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #about{
    margin:0 25em;
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
</style>
