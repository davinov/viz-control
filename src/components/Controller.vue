<template>
  <div class="controller" @click="update">
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
  methods: {
    update(event) {
      this.$el.offsetHeight 
      this.$el.offsetWidth 

      console.log(event.target.clientX)
      console.log(event.target.clientY)

      this.alpha = 0
      this.gamma = 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controller {
  text-align: left;
}
</style>
