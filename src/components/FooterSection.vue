<template>
<div id = "footer">
  Find me on
  <a href = "http://www.github.com/tannousmarc">github</a> ,
  <a href = "http://www.twitter.com/marcanache">twitter</a> ,
  <a href = "http://www.instagram.com/marcanache">instagram</a> , and
  <a href = "https://www.linkedin.com/in/marctannous/">linkedin</a>.
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
    background-color: #2f3640;
    color: #fefefe;
    padding: 2em 0;
    position: relative;
    float: bottom;
  }
  #footer img {
    transition: all 0s ease;
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
  #footer *{
    transition: all 0.15s ease-in-out;
  }
  #footer a{
    background-color: rgba(0, 168, 255, 0.4);
    text-decoration: none;
    color: #fefefe;
    padding: 0.15em 0.3em;
  }
  #footer a:hover{
    cursor: pointer;
    cursor: hand;
    border-bottom: 4px solid #00a8ff;
  }
</style>
