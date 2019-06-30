<template>
  <div class="mdl-grid">
    <Card
      v-for="element in elements"
      v-bind:name="element.name"
      v-bind:img="element.img"
      v-bind:progress="element.progress"
      v-bind:clickHook="element.clickHook"
      v-bind:key="element.name"
    />
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: "Cards",
  data() {
    return {}
  },
  props: {
    elements: Array
  },
  computed: {
  },
  components: {
    Card
  }
};
</script>

<style scoped>
</style>
