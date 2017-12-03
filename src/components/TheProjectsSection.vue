<template>
<div id = "projects">
  <div class = "homepage-project" v-for = "project in projects" :key = "project.id" v-bind:style = "{ backgroundImage: 'url(' + project.cover + ')' }">
    <div class = "text-container">
      <h1>{{project.title}}</h1>
      <pre>{{project.description}}</pre>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheProjectsSection',
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Esportsify',
          description: `Various Web Applications in the eSports industry.
Most of my work contributed to Ryze, a streaming platform that
aimed to provide the complete experience for eSports fans.`,
          tags: [],
          cover: require('../assets/esportsify-cover.jpg')
        },
        {
          id: 2,
          title: 'Food & Drink Innovation Network',
          description: `FDIN is the community for successful innovation professionals.
Their website now serves as the go-to place for innovation job vacancies
and career development within the UK food and drink industry.`,
          tags: [],
          cover: require('../assets/fdin-cover.jpg')
        },
        {
          id: 3,
          title: 'East European Comic-Con',
          description: `EECC is East Europe's most important event dedicated to fans of comics,
video games, as well as TV series and movies.
I was in charge of coordinating a team that handled local and online
marketing, web design and development, stream design and implemenation.`,
          tags: [],
          cover: require('../assets/eecc-cover.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
  .homepage-project{
    background-size: cover;
    height: 420px;
    position: relative;
  }
  .homepage-project h1,pre{
    text-align: left;
    color: #fefefe;
    margin: 0px;
    padding: 0px;
  }
  .homepage-project h1{
    font-size: 2em;
    font-weight: 400;
  }
  .homepage-project pre{
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 1.1em;
  }
  .homepage-project .text-container{
    position: absolute;
    top: 50%;
    text-align: center;
    margin-left: 8%;
    -ms-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

</style>
