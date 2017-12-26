
<template>
<transition-group name = "fade" mode = "out-in">
<div v-if = "loading" class = "loader" key="loading">
  <BaseLoader />
</div>
<div v-else key="loaded">
  <div id = "playgroundpage">
    <a v-for = "experiment in experiments" :href = "experiment.link" :key = "experiment.id">
      <div class = "experiment">
        <h1>{{experiment.title}}</h1>
        <div class = "line">
          <BaseTag v-for = "tag in experiment.tags" :key = "tag.id" :text = "tag.text" />
        </div>
        <br />
        <p>{{experiment.description}}</p>
      </div>
    </a>
  </div>
</div>
</transition-group>
</template>

<script>
import BaseLoader from './BaseLoader.vue'
import BaseTag from './BaseTag.vue'
export default {
  name: 'ThePlayground',
  components: {BaseLoader, BaseTag},
  data () {
    return {
      loading: true,
      experiments: [
        {
          id: 1,
          title: 'Procedurally generated terrain',
          tags: [
            {
              id: 1,
              text: 'Three.js'
            },
            {
              id: 2,
              text: 'JS'
            }
          ],
          description: 'Procedurally generated three dimensional terrain using three.js.',
          link: 'https://github.com/tannousmarc/three-procedural-environment'
        },
        {
          id: 2,
          title: 'Parallel Game of Life',
          tags: [
            {
              id: 1,
              text: 'Concurrent Computing'
            },
            {
              id: 2,
              text: 'C'
            }
          ],
          description: 'Highly optimized game of life, with parallel workers on a 100mhz processor, averaging 40ms per 512x512 iteration.',
          link: 'https://github.com/tannousmarc/xc-gameoflife'
        },
        {
          id: 3,
          title: 'Lock-picking minigame',
          tags: [
            {
              id: 1,
              text: 'JS'
            }
          ],
          description: 'Minigame that imitates the mechanism of a vault.',
          link: 'https://github.com/tannousmarc/minimal-lockpick'
        },
        {
          id: 4,
          title: 'Scotland Yard AI',
          tags: [
            {
              id: 1,
              text: 'Graph Theory'
            },
            {
              id: 2,
              text: 'Java'
            }
          ],
          description: 'Artificial intelligence that picks the best move based on a game state tree, the MiniMax algorithm and Alpha-Beta pruning.',
          link: 'https://github.com/tannousmarc/scotland-yard-AI'
        }
      ]
    }
  },
  mounted: function () {
    let self = this
    setTimeout(function () {
      self.loading = false
      self.$emit('loaded', 1)
    }, 300)
  },
  beforeDestroy: function () {
    this.$emit('loaded', 0)
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to
{ opacity: 0; }
*{
  transition: all 0.25s ease-in-out;
}
#playgroundpage{
  padding: 10em 20em 3em;
  background-color: #EEE;
}
a{
  text-decoration: none;
}
.experiment{
  background-color: #FEFEFE;
  text-align: left;
  padding: 4em 3em;
  margin-bottom: 1em;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.10);
  border: 20px solid #FEFEFE;
  transition: all 0.15s ease-in-out;
}
.experiment:hover{
  cursor: pointer;
  cursor: hand;
  border-color: #FF5964;
}
h1{
  color: #2c3e50;
  margin: 0;
  padding: 0 0 0 0;
  font-weight: 600;
  font-size: 2em;
}
p{
  font-size: 1.4em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #737373;
  text-align: left;
  line-height: 1.5;
  padding: 0.5em 0 0 0;
  margin: 0;
}
.line{
  padding: 0.2em 0 0.5em;
}
</style>
