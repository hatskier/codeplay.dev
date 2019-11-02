<template>
  <div class="button-container">
    <img class="coding-img" src="https://codenplay.io/img/3-code.png" />
    <p class="description">
      Codeplay.dev is a free game-based environment where even kids can learn to code
      without any previous knowledge or experience
    </p>
    <button
      v-on:click="signIn"
      class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored start-to-code-button">
      START TO CODE
    </button>
  </div>
</template>

<script>
import Blockchain from '../../modules/blockchain'

export default {
  name: 'ShoppingLists',
  props: {
  },
  methods: {
    signIn() {
      window.toastr.success('Blockstack authentication started')
      Blockchain.signIn()
    }
  }
}
</script>

<style scoped>
.description {
  margin: auto;
  max-width: 600px;
  margin-top: 30px;
  text-align: center;
}

.coding-img {
  width: 400px;
  margin: auto;
  display: block;
}

button.start-to-code-button {
  /* height: 100px;
  width: 100px; */
  width: 250px;
  height: 50px;
  /* position: fixed; */
  /* left: 50vw; */
  /* margin-left: -125px; */
  /* margin-top: -45px; */
  /* top: 50vh; */
  display: block;
  margin: auto;
  margin-top: 30px;
}
</style>
