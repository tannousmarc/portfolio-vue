<template>
<div id = "footer">
  <a href = "http://www.github.com/tannousmarc"><img src = "../assets/social-media/github.png" /></a>
  <a href = "http://www.instagram.com/marcanache"><img src = "../assets/social-media/instagram.png" /></a>
  <a href = "https://www.linkedin.com/in/marctannous/"><img src = "../assets/social-media/linkedin.png" /></a>
  <div id = "trademark">
    Copyright Marc Tannous 2017
  </div>
</div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
  name: 'FooterSection',
  data () {
    return {

    }
  },
  components: {BaseButton}
}
</script>

<style scoped>
  #footer {
    background-color: #222;
    color: #fefefe;
    padding: 2em 0 5em;
    position: relative;
    float: bottom;
  }
  #footer img {
    transition: all 0.2s ease;
    max-height: 50px;
    margin-right: 0.3em;
  }
  #footer img:last-child{
    margin-right: 0;
  }
  #footer img:hover{
    opacity: 0.7;
    cursor: pointer;
    cursor: hand;
  }
  h1{
    font-weight: 400;
    font-size: 2em;
    margin: 0;
    padding: 0;
  }
  #footer #trademark{
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-color: #FF5964;
    padding: 1em 0;
    font-size: 1em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
  }
</style>
