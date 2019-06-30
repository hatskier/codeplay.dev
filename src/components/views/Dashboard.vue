<template>
  <div>
    <h2 class="centered">Welcome to codeplay</h2>
    <div id="top-container" class="centered">
      <p>
        Using codeplay you can learn coding by playing.
        All your progress is saved in blockstack storage and is private by default.
      </p>

      <table>
        <tr v-if="nextLesson">
          <td>
            <span class="in-table-span">Next lesson:</span>
          </td>
          <td>
            <span class="in-table-span"><a v-bind:href="nextLessonUrl">{{ nextLesson }} </a></span>
          </td>
        </tr>
        <!-- <tr>
          <td>
            <span class="in-table-span">Last solved:</span>
          </td>
          <td>
            <span class="in-table-span">{{ lastSolvedLesson }}</span>
          </td>
        </tr> -->
        <tr>
          <td>
            <span class="in-table-span">Lessons solved:</span>
          </td>
          <td>
            <span class="in-table-span">{{ lessonsSolved + '/' + totalLessons }}</span>
          </td>
        </tr>
      </table>
      
      <h6 v-if="!nextLesson">You have successfully finished all the available lessons. Well done! Note that new lessons are coming soon ;)</h6>
    </div>

    <a v-if="nextLesson" id="next-lesson-button-link" v-bind:href="nextLessonUrl">
      <button id="next-lesson-button">
        NEXT LESSON
      </button>
    </a>
    
    <h4>Explore</h4>

    
    <br>
    <a href="#/lessons">
      <button  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        See all lessons
      </button>
    </a>
    <br>
    <a href="#/units">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        See all units
      </button>
    </a>


    <h4>Danger zone</h4>

    <button v-on:click="resetProgress" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Reset progress
    </button>
  </div>
</template>

<script>
import State from '../../modules/state'
import Lessons from '../../modules/lessons'

export default {
  name: 'Dashboard',
  data() {
    return {
      state: State,
    }
  },
  props: {
  },
  methods: {
    async resetProgress() {
      if (prompt('Please type "reset" to remove all info about solved tasks') == 'reset') {
        await State.resetProgress()
      }
    }
  },
  computed: {
    // TODO implement
    nextLesson() {
      for (let lesson of Lessons.lessons) {
        console.log('qweqweqwe')
        console.log(this.state.solvedLessons)
        console.log(lesson)
        if (!this.state.solvedLessons.includes(lesson.name)) {
          return lesson.name
        }
      }
      return null
    },
    lessonsSolved() {
      return this.state.solvedLessons.length
    },
    totalLessons() {
      return Lessons.lessons.length
    },
    nextLessonUrl() {
      return `codeplay-dist/lesson.html?config=${this.nextLesson}&nextPage=/#/welldone/${this.nextLesson}`
    },
    // lastSolvedLesson() {
    //   return 'easyLabyrinth'
    // }
    
  }
}
</script>

<style scoped>
  h2 {
    margin: 20px;
  }

  div {
    text-align: center;
  }

  button {
    margin: 5px;
    margin-bottom: 30px;
  }

  #next-lesson-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 25px 42px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;

    margin-top: 30px;
  }

  #top-container {
    max-width: 600px;
  }

  p {
    text-align: justify;
  }

  table {
    margin: auto;
    text-align: left;
  }

  .in-table-span {
    font-size: large;
  }
</style>
