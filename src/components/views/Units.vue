<template>
  <div>
    <!-- <h2 class="centered">Units</h2> -->
    
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

function redirectToLessons(unitName) {
  return function () {
    console.log(`Redirecting to lessons for ${unitName}`);
    // context.$router.push({ name: 'lessons', params: { unit: unitName } })
    location.href = `#/lessons/${unitName}`;
  }
}

function getProgress(units, context) {
  return units.map(unit => {
    unit.progress = context.state.getProgressForUnit(unit.name)
    unit.clickHook = redirectToLessons(unit.name)
    return unit
  })
}

export default {
  name: 'Units',

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
      return getProgress(Lessons.units, this)
    }
  },

  components: {
    Cards
  }
}
</script>

<style scoped>
  h2 {
    margin: 20px;
  }
</style>
