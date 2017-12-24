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
    const tags = ['JS', 'PHP', 'UX', 'Mobile', 'Print', 'Marketing', 'Big Data', 'Vue.js', 'Java', 'SQLite', 'C++', 'C']
    const colors = ['pink', 'green', 'citrine', 'lapislazuli', 'dungeon', 'lavender', 'crayolablue', 'forest', 'fire', 'azure', 'tiffany', 'willpower']
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
    text-shadow : 0 1px 2px rgba(0,0,0,0.25);
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
  .crayolablue{
    background-color: #3772FF;
  }
  .forest{
    background-color: #7fb800;
  }
  .fire{
    background-color: #ea2d2f;
  }
  .azure{
    background-color: #0496FF;
  }
  .tiffany{
    background-color: #0CBABA;
  }
  .willpower{
    background-color: #F75C03;
  }
</style>
