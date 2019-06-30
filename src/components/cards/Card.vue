<template>
  <div class="mdl-cell mdl-cell--3-col">
    <div class="card-square mdl-card mdl-shadow--2dp" @click="clickHook">
      <div class="mdl-card__title mdl-card--expand elem-image"
        v-bind:style="{
          'background': `url('${img}')`,
          'background-size': 'cover'
        }"
      >
      </div>
      <div class="mdl-card__supporting-text">
        <h2 class="mdl-card__title-text">
          {{ name }}
          <span id="progress-text">
            {{ '(' + progress.done + '/' + progress.total + ')' }}
          </span>
        </h2>
        
      </div>
      
      <!-- <div class="mdl-card__actions mdl-card--border"> -->
        <!-- <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Go to lessons
        </a> -->
        <!-- <div id="p1" class="mdl-progress mdl-js-progress"></div> -->
        <!-- {{ progress.done + ' / ' + progress.total }} -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  // data() {
  // },
  props: {
    name: String,
    img: String,
    progress: Object,
    clickHook: Function,
  },
  computed: {
  }
};
</script>

<style scoped>
  .card-square.mdl-card {
    /* width: 320px; */
    width: 22vw;
    /* height: 320px; */
    cursor: pointer;
  }
  .card-square > .mdl-card__title {
    color: #fff;
  }
  #progress-text {
    /* font-size: small; */
    padding-left: 5px;
  }
  .elem-image {
    height: 13vw;
  }

  h2 {
    color: black;
    font-size: 1.4em;
  }
</style>
