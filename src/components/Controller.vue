<template>
  <div class="controller">
    <div>
      Alpha
      <input type="range" min=0 max=1 step=0.01 v-model="alpha">
      {{ alpha }}
    </div>
    <div>
      Beta1
      <input type="range" min=0 max=1 step=0.01 v-model="beta1">
      {{ beta1 }}
    </div>
    <div>
      Beta2
      <input type="range" min=0 max=1 step=0.01 v-model="beta2">
      {{ beta2 }}
    </div>
    <div>
      Beta3
      <input type="range" min=0 max=1 step=0.01 v-model="beta3">
      {{ beta3 }}
    </div>
    <div>
      Gamma
      <input type="range" min=0 max=1 step=0.01 v-model="gamma">
      {{ gamma }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controller',
  props: {
  },
  data () {
    return {
      alpha: 1,
      beta1: 0,
      beta2: 0,
      beta3: 0,
      gamma: 0
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controller {
  text-align: left;
}
</style>
