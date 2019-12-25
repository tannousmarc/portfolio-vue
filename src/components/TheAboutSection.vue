<template>
<div id = "about">
 <span id = "about-left">
        <img src = "../assets/profile.png" />
  </span>
  <span id = "about-right">
    <h1>Hey.</h1>
    <p>I'm Marc. I'm a Forward Deployed Software Engineer at Palantir.
      <br />Check out a <router-link to = "projects">list of selected projects</router-link> from my days as a contractor.
      <br />Additionally, the <router-link to = "playground">playground page</router-link> is where I showcase fun side projects.
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
    border-top: 1px solid gainsboro;
  }
  #about-left{
    display: inline-block;
    width: 20%;
    vertical-align: middle;
    white-space: normal;
  }
  #about-left img{
    border-radius: 50%;
    max-height: 200px;
    width: 80%;
  }
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
    background-color: rgba(0, 168, 255, 0.4);
    text-decoration: none;
    color: #222;
    padding: 0.15em 0.3em;
  }
  #about-right a:hover{
    cursor: pointer;
    cursor: hand;
    border-bottom: 4px solid #00a8ff;
  }
  @media only screen and (max-width: 780px){
    #about-right{
      margin: 0 5%;
    }
  }
</style>
