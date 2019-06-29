<template>
  <div>
    <h2 class="centered">Contacts</h2>
    <Cards
      v-bind:elements="elements"
      v-bind:addable="false"
      v-bind:editable="false"
      v-bind:removable="false"
    />

  </div>
</template>

<script>
import EditableListTemplate from '../EditableListTemplate'
import State from '../../modules/state'
import Utils from '../../modules/utils'

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
      [
        {
          name: 'Instructions',
          img: 'https://s3.amazonaws.com/alcourses.codeplay/common/computer-meme.png'
        }
      ]
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
