<template>
  <div>
    
    <h2> Well done! </h2>
    <img id="well-done-img" src="https://s3.amazonaws.com/alcourses.codeplay/common/check-mark.gif">
    <p> You have successfully finished the lesson: {{ lessonName }}.</p>

    <!-- This link is hardcoded only for now -->
    <!-- <a href="#/lessons/Instructions"> -->
    <a v-on:click="saveSolved">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        SAVE & CONTINUE
      </button>
    </a>

  </div>
</template>

<script>

import State from '../../modules/state'
// import Lessons from '../../modules/lessons'

export default {
  name: 'WellDone',

  data() {
    return {
      state: State,
    }
  },

  computed: {
    lessonName() {
      return this.$route.params.lessonName
    }
  },

  methods: {
    async saveSolved() {
      await this.state.addSolvedLesson(this.lessonName)
      location.href = '#/dashboard'
    }
  }
}
</script>

<style scoped>
  div {
    text-align: center;
  }
  h4 {
    margin: 20px;
  }

  #well-done-img {
    height: 30vh;
  }
</style>
