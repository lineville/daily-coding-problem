<template>
  <HanoiTowers />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HanoiTowers from './components/HanoiTowers.vue'

export default defineComponent({
  name: 'App',
  components: {
    HanoiTowers
  }
})
</script>

<style>
</style>
