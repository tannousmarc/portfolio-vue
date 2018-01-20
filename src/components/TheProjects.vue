
<template>
<transition-group name = "fade" mode = "out-in">
<div v-if = "loadCondition" class = "loader" key="loading">
  <BaseLoader />
</div>
<div v-bind:class = "{hidden: loadCondition}" id = "projectspage" key = "loaded">
  <div class="grid">
  <div v-images-loaded:on.progress="imageProgress">
    <span v-for = "project in projects" :key = "project.id">
      <div v-if="project.width === 1" class = "grid-item">
        <img :src = "project.image" class = "project-image" />
        <h1>{{project.name}}</h1>
        <div class = "line">
          <BaseTag v-for = "tag in project.tags" :key = "tag.id" :text = "tag.text" />
        </div>
        <p>{{project.description}}</p>
      </div>
      <div v-else class = "grid-item grid-item--width2">
        <img :src = "project.image" class = "project-image" />
        <h1>{{project.name}}</h1>
        <div class = "line">
          <BaseTag v-for = "tag in project.tags" :key = "tag.id" :text = "tag.text" />
        </div>
        <p>{{project.description}}</p>
      </div>
    </span>
  </div>
  </div>
</div>
</div>
</transition-group>
</template>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>

<script>
import BaseLoader from './BaseLoader.vue'
import BaseTag from './BaseTag.vue'
import imagesLoaded from 'vue-images-loaded'

export default {
  name: 'TheProjects',
  components: {BaseLoader, BaseTag},
  directives: {
    imagesLoaded
  },
  methods: {
    imageProgress (instance, image) {
      const result = image.isLoaded ? 'loaded' : 'broken'
      if (result === 'loaded') {
        this.loadedImages++
        console.log(this.loadedImages)
      }
      if (this.loadedImages === this.projects.length) {
        console.log('Images done!')
      }
    }
  },
  data () {
    return {
      loading: true,
      loadedImages: 0,
      projects: [
        {
          name: 'Logobox',
          id: 1,
          width: 1,
          image: require('../assets/project-previews/logobox.png'),
          description: `Co-founder of an online platform that connected new businesses with teams of designers, in order to provide bespoke branding solutions.`,
          tags: [
            {
              id: 1,
              text: 'Marketing'
            },
            {
              id: 2,
              text: 'JS'
            },
            {
              id: 3,
              text: 'UX'
            }
          ]
        },
        {
          name: 'University of Bristol Software Product Engineering',
          id: 2,
          width: 2,
          image: require('../assets/project-previews/bristol.jpg'),
          description: `Built application that clients, students, and lecturers use to interact with their
respective projects from the Software Product Engineering unit. `,
          tags: [
            {
              id: 1,
              text: 'JS'
            },
            {
              id: 2,
              text: 'Vue.js'
            },
            {
              id: 3,
              text: 'Java'
            },
            {
              id: 4,
              text: 'SQLite'
            }
          ]
        },
        {
          name: 'Google Code-In',
          id: 3,
          width: 1,
          image: require('../assets/project-previews/google.png'),
          description: `Named GCI Grand Prize Winner for assisting the development of the primary solid modelling CAD system used by the U.S. military.`,
          tags: [
            {
              id: 1,
              text: 'C'
            },
            {
              id: 2,
              text: 'C++'
            }
          ]
        },
        {
          name: 'Ryze',
          id: 4,
          width: 2,
          image: require('../assets/project-previews/ryze.jpg'),
          description: `Developed various Web Applications in the eSports industry.
Most of my work contributed to Ryze, a streaming platform that
aimed to provide the complete experience for eSports fans.`,
          tags: [
            {
              id: 1,
              text: 'JS'
            },
            {
              id: 2,
              text: 'PHP'
            },
            {
              id: 3,
              text: 'UX'
            }
          ]
        },
        {
          name: 'East European Comic Con',
          id: 5,
          width: 1,
          image: require('../assets/project-previews/comic.png'),
          description: `Was in charge of coordinating the team that handled local and online
marketing, design, development, and live online broadcasting.`,
          tags: [
            {
              id: 1,
              text: 'Print'
            },
            {
              id: 2,
              text: 'Marketing'
            }
          ]
        },
        {
          name: 'WeeGo',
          id: 6,
          width: 1,
          image: require('../assets/project-previews/wee.png'),
          description: `Designed UI/UX for social media platform that aims to provide an overview of ongoing gigs and promote local events.`,
          tags: [
            {
              id: 1,
              text: 'Mobile'
            },
            {
              id: 2,
              text: 'UX'
            }
          ]
        },
        {
          name: 'Food and Drink Innovation Network',
          id: 7,
          width: 1,
          image: require('../assets/project-previews/fdin.png'),
          description: `Designed mobile-first platform for a network with ramifications in the food industry.`,
          tags: [
            {
              id: 1,
              text: 'Marketing'
            },
            {
              id: 2,
              text: 'Mobile'
            },
            {
              id: 3,
              text: 'UX'
            }
          ]
        },
        {
          name: 'Rankopolis',
          id: 8,
          width: 1,
          image: require('../assets/project-previews/rank.png'),
          description: `Designed and developed Rankpolis, a free platform for users to get together and enjoy common interests.`,
          tags: [
            {
              id: 1,
              text: 'UX'
            },
            {
              id: 2,
              text: 'Mobile'
            },
            {
              id: 3,
              text: 'JS'
            }
          ]
        },
        {
          name: 'ALCES',
          id: 9,
          width: 2,
          image: require('../assets/project-previews/alces.png'),
          description: `Built web dashboard to run statistical tests against ALCES data.
Complex data sets generated by monitoring programs can now be
summarized, visualized, and analyzed with ease.`,
          tags: [
            {
              id: 1,
              text: 'JS'
            },
            {
              id: 2,
              text: 'UX'
            },
            {
              id: 3,
              text: 'Big Data'
            }
          ]
        },
        {
          name: 'Topovo',
          id: 10,
          width: 1,
          image: require('../assets/project-previews/ovo.png'),
          description: `Identity and branding design for a corporation that handles egg production & international distribution.`,
          tags: [
            {
              id: 1,
              text: 'Marketing'
            }
          ]
        },
        {
          name: 'CS:GO Blitz',
          id: 11,
          width: 2,
          image: require('../assets/project-previews/blitz.png'),
          description: `Built highly successful platform connected to Steam's API, where players could import and export in-game items to be utilized as currency for a plethora of minigames.`,
          tags: [
            {
              id: 1,
              text: 'JS'
            },
            {
              id: 2,
              text: 'Mobile'
            },
            {
              id: 3,
              text: 'UX'
            }
          ]
        },
        {
          name: 'Datasembly',
          id: 12,
          width: 1,
          image: require('../assets/project-previews/data.png'),
          description: `Designed the branding for Washington-based startup that harvests, processes, and provides pricing data .`,
          tags: [
            {
              id: 1,
              text: 'Marketing'
            }
          ]
        }

      ]
    }
  },
  computed: {
    loadCondition: function () {
      // `this` points to the vm instance
      if (this.loading) {
        return true
      }
      if (!this.loading && !(this.loadedImages === this.projects.length)) {
        return true
      }
      if (!this.loading && (this.loadedImages === this.projects.length)) {
        return false
      }
      // T ORICE = F
      // F ORICE = F
      // F F = T
      // (!a ^ !b)
    }
  },
  mounted: function () {
    window.scrollTo(0, 0)
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
.grid{
  padding: 10em 10em 3em;
}
.grid-item {
   width: 350px;
   display: inline-block;
   background-color: #FEFEFE;
   margin: 0 0.3em 0.6em;
   box-shadow: 0px 3px 4px rgba(0,0,0,0.10);
 }
.grid-item--width2 { width: 500px; }
.fade-enter, .fade-leave-to
{ opacity: 0; }
*{
  transition: all 0.25s ease-in-out;
}

#projectspage{
  background-color: #EEE;
  transition-duration: 0, 200ms;
  transition-property: visibility, opacity;
  transition-delay: 0;
}
.hidden {
    visibility: hidden;
    opacity: 0;
    transition-duration: 200ms, 0;
    transition-property: opacity, visibility;
    transition-delay: 0, 200ms;
}

h1{
  font-size: 1.25em;
  padding: 1em 1.6em 0em;
  margin: 0;
  text-align: left;
  font-weight: 600;
}
p{
  font-size: 1em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  color: #737373;
  text-align: left;
  line-height: 1.5;
  padding: 1em 2em;
}
.line{
  padding: 0.1em 2em 0.4em;
}
.project-image{
  width: 100%;
  height: 250px;
  display: block;
  object-fit: cover;
}
</style>
