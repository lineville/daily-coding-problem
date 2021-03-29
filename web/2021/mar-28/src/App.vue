<template>
  <NumberGrid rows="10" columns="25" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberGrid from './components/NumberGrid.vue'

export default defineComponent({
  name: 'App',
  components: {
    NumberGrid,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
