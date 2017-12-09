<template>
  <router-link v-if = "!isAbsolute" :to = "url">
    <button>{{text}}</button>
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
    background-color: #FF5964;
    border-color: #FF5964;
  }
  .black button{
    border-color: #222;
    color: #222;
    padding: 1em 2em;
    margin: 4em 0;
    width: 300px;
  }
  .black button:hover{
    border-color: #FF5964;
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
    color: #FF5964;
  }
</style>
