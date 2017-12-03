<template>
  <span class = "tag" :class = "this.color">{{this.text}}</span>
</template>

<script>
export default {
  name: 'BaseTag',
  data () {
    return {
      color: undefined
    }
  },
  props: {
    text: {
      type: String,
      require: true
    }
  },
  created () {
    // trivial implementation of a tuple/map, could be made more elegant
    const tags = ['JS', 'PHP', 'UX', 'Mobile', 'Print', 'Marketing']
    const colors = ['pink', 'green', 'citrine', 'lapislazuli', 'dungeon', 'lavender']
    this.color = colors[tags.indexOf(this.text)]
  }
}
</script>

<style scoped>
  .tag{
    float: left;
    display: inline-block;
    padding: 0.25em 1em;
    border-radius: 15px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #fefefe;
    background-color: #FF5964;
    margin-right: 0.5em;
    font-size: 0.8em;
    margin-top: 0.5em;
  }
  .green{
    background-color: #27ae60;
  }
  .citrine{
    background-color: #E3B505;
  }
  .pink{
    background-color: #F0386B;
  }
  .lapislazuli{
    background-color: #2274A5;
  }
  .lavender{
    background-color: #7F7EFF;
  }
  .dungeon{
    background-color: #CA2E55;
  }
</style>
