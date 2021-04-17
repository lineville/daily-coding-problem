<template>
  <h3>Collatz Sequence</h3>

  <p>
    A Collatz sequence in mathematics can be defined as follows. Starting with
    any positive integer: if n is even, the next number in the sequence is n / 2
    if n is odd, the next number in the sequence is 3n + 1 It is conjectured
    that every such sequence eventually reaches the number 1. Test this
    conjecture.
  </p>

  <label for="nInput">n = </label>
  <input type="number" v-model="n" min="1" id="nInput" />
  <span>Sequence Length: {{ collatzSequence.length }}</span>

  <p id="collatzSequence">
    collatz_sequence({{ n }}) = {{ collatzSequence.join(', ') }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Collatz',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    collatzSequence(): Array<number> {
      let result = new Array<number>()
      let currentN = this.n

      while (currentN > 1) {
        result.push(currentN)
        if (currentN % 2 === 0) {
          currentN = currentN / 2
        } else {
          currentN = 3 * currentN + 1
        }
      }
      result.push(currentN)

      return result
    },
  },
})
</script>

<style scoped>
input {
  margin: 10px;
  width: 50px;
}

p,
#collatzSequence {
  max-width: 40%;
  margin: auto;
}
</style>
