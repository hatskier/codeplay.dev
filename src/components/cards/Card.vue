<template>   
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand"
      v-bind:style="{
        background: `url('${img}') bottom right 15% no-repeat #46B6AC`
      }"
    >
      <h2 class="mdl-card__title-text">{{ name }}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenan convallis.
    </div>
    <div id="p1" class="mdl-progress mdl-js-progress"></div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Go to lessons
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  data() {
  },
  props: {
    name: String,
    img: String,
    progress: Number,
    
  },
  computed: {
  }
};
</script>

<style scoped>
  .demo-card-square.mdl-card {
    width: 320px;
    height: 320px;
  }
  .demo-card-square > .mdl-card__title {
    color: #fff;
  }
</style>
