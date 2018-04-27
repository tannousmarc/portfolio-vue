<template>
<transition-group name = "fade" mode = "out-in">
<div v-if = "loading" class = "loader" key="loading">
  <BaseLoader />
</div>
<div v-else key="loaded">
  <div id = "contactpage">
    <div id = "contactpage-description">
      <h1>Contact</h1>
      <p>I am currently only available for part-time opportunities.<br />
      If you would like to collaborate on a project, please send me a detailed message and I’ll get back to you within 24 hours.
      </p>
    </div>
    <form action="../assets/form.php" method="post">
      <div class="field name-box">
          <input type="text" id="name" name="name" placeholder="Full name"/>
      </div>

      <div class="field email-box">
          <input type="text" id="email" name="email" placeholder="E-mail address"/>
      </div>
      <div class="field msg-box">
          <textarea id="msg" rows="4" name="message" placeholder="Message..."></textarea>
      </div>
      <input class="button" type="submit" value="Send Message" />
    </form>
  </div>
</div>
</transition-group>
</template>

<script>
import BaseLoader from './BaseLoader.vue'
export default {
  name: 'TheContact',
  components: {BaseLoader},
  data () {
    return {
      loading: true
    }
  },
  mounted: function () {
    let self = this
    self.loading = false
    self.$emit('loaded', 1)
  },
  beforeDestroy: function () {
    this.$emit('loaded', 0)
  },
  methods: {
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to
{ opacity: 0; }
*{
  transition: all 0.25s ease-in-out;
  box-sizing: border-box;
}
#contactpage{
  padding: 10em 15% 5em;
  background-color: #222;
  color: #fefefe;
}
p{
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #fefefe;
  font-size: 1.1em;
  line-height: 1.8em;
  margin: 0;
  padding: 1em 0em 2em;
}
h1{
  font-weight: 300;
  margin: 0px;
  padding: 0px;
}


input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #222;
}

input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  color: #222;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #222;

}

input:focus::-moz-placeholder, textarea:focus::-moz-placeholder {
  color: #222;
}

input::placeholder, textarea::placeholder {
  color: #aca49c;
}

input:focus::placeholder, textarea::focus:placeholder {
  color: #222;
}

input::-ms-placeholder, textarea::-ms-placeholder {
  color: #222;
}

input:focus::-ms-placeholder, textarea:focus::-ms-placeholder {
  color: #fefefe;
}

/* on hover placeholder */

input:hover::-webkit-input-placeholder, textarea:hover::-webkit-input-placeholder {
  color: #fefefe;
}

input:hover:focus::-webkit-input-placeholder, textarea:hover:focus::-webkit-input-placeholder {
  color: #fefefe;
}

input:hover::-moz-placeholder, textarea:hover::-moz-placeholder {
  color: #fefefe;
}

input:hover:focus::-moz-placeholder, textarea:hover:focus::-moz-placeholder {
  color: #fefefe;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #fefefe;
}

input:hover:focus::placeholder, textarea:hover:focus::placeholder {
  color: #fefefe;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #fefefe;
}

input:hover:focus::-ms-placeholder, textarea:hover::focus:-ms-placeholder {
  color: #fefefe;
}

#form {
  position: relative;
  width: 500px;
  margin: 50px auto 100px auto;
}
#contactpage-description{
  width: 60%;
  margin: 0 auto;
  text-align: left;
}
input {
  width: 60%;
  padding: 1.5em 1em;
  margin: 0;
  background: transparent;
  outline: none;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #eee;
  font-size: 1em;

  border: solid 2px #fefefe;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}
input::placeholder{
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #fefefe;
  font-size: 1em;
}
textarea::placeholder{
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #eee;
  font-size: 1em;
}

input:hover {
  background-color: #333;
  color: #fefefe;
}
.button{
  border-bottom: solid 2px #fefefe;

}
.button:hover{
  background-color: #FF5964;
  cursor: pointer;
  cursor: hand;
  border-color: #FF5964;
}
textarea {
  width: 60%;
  height: 150px;
  padding: 1.5em 1em;
  margin: 0;
  background: transparent;
  outline: none;
  margin-top: -1px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #fefefe;
  font-size: 1em;

  border: solid 2px #eee;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  resize: none;
}
input[type=submit] {
  border-top: none;
  margin-top: -1px;
}

textarea:hover {
  background: #333;
  color: #fefefe;
}
@media only screen and (max-width: 780px){
  #contactpage{
    padding: 7em 5% 3em;
    margin-bottom: -5px;
  }
  #contactpage-description, input, textarea{
    width: 100%;
  }
  input[type=submit]{
    margin-top: -4px;
  }
}

</style>
