<template>
  <h1>Hanoi Towers</h1>
  <p>
    Hanoi Towers is a game played with 3 rods and n dics. You can select how</p>
    many discs below. All the disks start off on the first rod in a stack. 
    <p>They are ordered by size, with the largest disk on the bottom and the smallest
    one at the top.</p>
    <p>The goal of this puzzle is to move all the disks from the
    first rod to the last rod while following these rules:</p>
  <ul>
    <li>You can only move one disk at a time.</li>
    <li>
      A move consists of taking the uppermost disk from one of the stacks and
      placing it on top of another stack.
    </li>
    <li>You cannot place a larger disk on top of a smaller disk.</li>
  </ul>

  <span>N = <input type="number" v-model="n" name="disc" /></span>
  <br />
  <span>From Rod: <input type="number" v-model="rodFrom" name="rodFrom" min="1" max="3"/></span>
  <span>To Rod: <input type="number" v-model="rodTo" name="rodTo" min="1" max="3"/></span>
  <br />
  <span>
    <button v-on:click="moveDisc">Move</button>
  </span>

  <!-- Three vertical stacks here -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HanoiTowers',
  data() {
    return { 
      n: 10,
      rodFrom: 1,
      rodTo: 2
    }
  },
  methods: {
    moveDisc() {
      console.log(`moving from rod ${this.rodFrom} to rod ${this.rodTo}`)
    }
  }
})
</script>

<style scoped>
input { 
  max-width: 60px;
}
</style>
