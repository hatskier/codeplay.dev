<template>
  <div>
    <h2 class="centered">Welcome to codeplay</h2>
    <!-- <p class="centered">
      Learn coding by playing
    </p> -->
    <button v-on:click="resetProgress" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Reset progress
    </button>
  </div>
</template>

<script>
import State from '../../modules/state'

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
</style>
