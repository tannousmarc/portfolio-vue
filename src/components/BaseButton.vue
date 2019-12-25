<template>
  <router-link v-if = "!isAbsolute" :to = "url">
    <button class = "btn">{{text}}</button>
  </router-link>
  <a v-else :href = "url">
    <button>{{text}}</button>
  </a>
</template>

<script>
export default {
  name: 'BaseButton',
  data () {
    return {
      isAbsolute: false
    }
  },
  props: {
    url: {
      type: String,
      required: true
    },
    text: {
      type: String,
      require: true
    }
  },
  created () {
    this.isAbsolute = this.url.substring(0, 4) === 'http'
  }
}
</script>

<style scoped>
button{
  border: none;
  background-color: rgba(0,0,0,0);
  color: #fefefe;
  border-radius: 0px;
  border: 2px solid #fefefe;
  padding: 1em 2em;
  font-size: 1em;
  margin-right: 0.5em;
  margin-top: 1em;
  transition: all 0.25s ease;
  font-family: 'Montserrat', sans-serif;
  width: 180px;
}
button:hover{
  cursor: pointer;
  cursor: hand;
  background-color: #00a8ff;
  border-color: #00a8ff;
}
.black button{
  border-color: #222;
  color: #222;
  padding: 1em 2em;
  margin: 4em 0;
  width: 300px;
}
.four button{
  margin: 1em 0;
  padding: 0.5em 1em;
  width: 150px;
  color: #737373;
  border-color: #737373;
}
.black button:hover{
  border-color: #00a8ff;
  color: #fefefe;
}
.white button{
  border-color: #fefefe;
  color: #fefefe;
  padding: 1em 2em;
  margin: 0;
  width: 300px;
}
.white button:hover{
  border-color: #fefefe;
  background-color: #fefefe;
  color: #00a8ff;
}
@media only screen and (max-width: 780px){
  .mobile button{
    width: 100%;
    padding: 1em 1.5em;
    margin-right: 0;
  }
  .mobile button{
    margin-top: 0.5em;
  }
}
</style>
