<template>
  <div>
    <h3 v-if="!unit">All lessons</h3>
    <h3 v-if="unit">Unit: {{ unit }}</h3>
    
    <h6 v-if="elements.length == 0">
      This unit has no lessons yet
    </h6>

    <Cards
      v-bind:elements="elements"
    />


  </div>
</template>

<script>
// import EditableListTemplate from '../EditableListTemplate'
import Cards from '../cards/Cards'
import State from '../../modules/state'
// import Utils from '../../modules/utils'
import Lessons from '../../modules/lessons'

function redirectToLesson(lessonName) {
  return function () {
    console.log(`Redirecting to lesson ${lessonName}`);
    // context.$router.push({ name: 'lessons', params: { unit: unitName } })
    location.href = encodeURI(`codeplay-dist/lesson.html?config=${lessonName}&nextPage=/#welldone/${lessonName}`);
  }
}

// TODO implement
function getLessons(context, unitName) {
  console.log(context.state);
  let lessons = Lessons.lessons
    .filter(lesson => {
      if (unitName) {
        return lesson.unit == unitName
      }
      return true
    })
    .map(lesson => {
      lesson.progress = context.state.getProgressForLesson(lesson.name)
      lesson.clickHook = redirectToLesson(lesson.name)
      return lesson  
    })
  return lessons
}

export default {
  name: 'Lessons',

  data() {
    return {
      dataModel: {
        name: 'String',
        img: 'String',
      },
      state: State,
    }
  },

  computed: {
    elements() {
      let unit = this.$route.params.unit
      return getLessons(this, unit)
    },
    unit() {
      return this.$route.params.unit
    }
  },

  components: {
    Cards
  }
}
</script>

<style scoped>
  h2,h3,h4,h5,h6 {
    margin: 20px;
  }
</style>
