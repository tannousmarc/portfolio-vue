<template>
<div id = "about">
<!--  <span id = "about-left">
        <img src = "../assets/profile.jpg" />
      </span> -->
  <span id = "about-right">
    <h1>Hi.</h1>
    <p>I'm Marc Tannous. Currently, I'm a final year Computer Science student.
      <br />I like to brag about being a <a href = "https://www.google-melange.com/archive/gci/2014">Google award-winning developer</a>.
      <br />Here's a <router-link to = "projects">list of selected projects</router-link> that I've been hired to work on over the past few years.
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
    background-color: #fefefe;
    padding: 5em 0;
    white-space: nowrap;

  }
  /*#about-left{
    display: inline-block;
    width: 45%;
    vertical-align: middle;
    white-space: normal;
  }
  #about-left img{
    // hand-generated octagon clipping path
    clip-path: polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%);
    -webkit-clip-path: polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%);
  }*/
  #about-right{
    white-space: normal;
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    margin: 0 auto;
  }
  #about-right h1{
    margin: 0;
    padding: 0;
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
  @media only screen and (max-width: 780px){
    #about-right{
      margin: 0 5%;
    }
  }
</style>
