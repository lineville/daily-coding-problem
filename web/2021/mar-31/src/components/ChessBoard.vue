<template>
  <h3>Chess Board</h3>

  <ul>
    <li v-for="row in board()" v-bind:key="row">
      <span v-for="cell in row" v-bind:key="cell">{{ cell }}</span>
    </li>
  </ul>

  <label for="newBishopRow">Row</label>
  <input
    id="newBishopRow"
    v-model="newBishopRow"
    type="number"
    min="0"
    :max="size - 1"
  />

  <label for="newBishopColumn">Column</label>
  <input
    id="newBishopColumn"
    v-model="newBishopColumn"
    type="number"
    min="0"
    :max="size - 1"
  />

  <button @click="addBishop">Add Bishop</button>

  <p>Attacking Pairs: {{ attackingPairs }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChessBoard',
  data() {
    return {
      size: 5,
      bishops: [
        { id: 1, x: 0, y: 0 },
        { id: 2, x: 1, y: 2 },
        { id: 3, x: 2, y: 2 },
        { id: 4, x: 4, y: 0 },
      ],
      newBishopRow: 0,
      newBishopColumn: 0,
    }
  },
  computed: {
    attackingPairs(): Array<[number, number]> {
      let pairs = new Array<[number, number]>()
      this.bishops.forEach((b, i) => {
        for (let j = i + 1; j < this.bishops.length; j++) {
          const deltaX = Math.abs(b.x - this.bishops[j].x)
          const deltaY = Math.abs(b.y - this.bishops[j].y)
          if (deltaX === deltaY) {
            pairs.push([b.id, this.bishops[j].id])
          }
        }
      })
      return pairs
    },
  },
  methods: {
    board(): Array<Array<string>> {
      let board = new Array(this.size)
      for (let i = 0; i < this.size; i++) {
        board[i] = new Array(this.size)
        for (let j = 0; j < this.size; j++) {
          const isBishop = this.bishops.filter((b) => b.x === i && b.y === j)
            .length
          board[i][j] = isBishop ? '♝' : '_'
        }
      }
      return board
    },
    addBishop() {
      this.bishops.push({
        id: this.bishops.length + 1,
        x: this.newBishopRow,
        y: this.newBishopColumn,
      })
    },
  },
})
</script>

<style scoped>
span {
  margin: 0px 2px 0px 2px;
}

ul {
  list-style: none;
}

input {
  margin: 5px;
}

#newBishopColumn {
  max-width: 40px;
}

#newBishopRow {
  max-width: 40px;
}
</style>
