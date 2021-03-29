<template>
  <h3>Spiral Number Traversal</h3>
  <ul>
    <li v-for="row in matrix" v-bind:key="row">
      <span
        v-for="(cell, cIdx) in row"
        v-bind:key="cIdx"
        class="number-item"
        v-bind:style="{ backgroundColor: cell.visited ? '#00FFFF' : '#FFFFFF' }"
      >
        {{ cell.value }}
      </span>
    </li>
  </ul>

  <p>Location: x: {{ location.column }} y: {{ location.row }}</p>

  <button v-on:click="printSpiral">Simulate Spiral Traversal</button>
  <button v-on:click="reset">Reset</button>
  <p>{{ outputNumbers }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Direction from '../lib/Direction'
import Cell from '../lib/Cell'

export default defineComponent({
  name: 'NumberGrid',
  props: {
    rows: {
      type: Number,
      required: true,
    },
    columns: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      maxNumber: 10,
      colorMatrix: Array.from({ length: this.rows }, () =>
        Array.from({ length: this.columns }, () => 'white')
      ),
      location: {
        row: 0,
        column: 0,
      },
      direction: Direction.Right,
      outputNumbers: new Array<Number>(),
    }
  },
  computed: {
    matrix(): Array<Array<Cell>> {
      return Array.from({ length: this.rows }, () =>
        Array.from({ length: this.columns }, () => ({
          value: Math.floor(Math.random() * this.maxNumber),
          visited: false,
        }))
      )
    },
  },
  methods: {
    printSpiral() {
      if (!this.completed()) {
        this.matrix[this.location.row][this.location.column].visited = true
        this.outputNumbers.push(
          this.matrix[this.location.row][this.location.column].value
        )

        let shouldTurn = false
        switch (this.direction) {
          case Direction.Right:
            shouldTurn =
              this.location.column === this.columns - 1 ||
              this.matrix[this.location.row][this.location.column + 1].visited

            if (shouldTurn) {
              this.direction = Direction.Down
            } else {
              this.location.column++
            }
            break

          case Direction.Left:
            shouldTurn =
              this.location.column === 0 ||
              this.matrix[this.location.row][this.location.column - 1].visited

            if (shouldTurn) {
              this.direction = Direction.Up
            } else {
              this.location.column--
            }
            break

          case Direction.Up:
            shouldTurn =
              this.location.row === 0 ||
              this.matrix[this.location.row - 1][this.location.column].visited

            if (shouldTurn) {
              this.direction = Direction.Right
            } else {
              this.location.row--
            }
            break

          case Direction.Down:
            shouldTurn =
              this.location.row === this.rows - 1 ||
              this.matrix[this.location.row + 1][this.location.column].visited

            if (shouldTurn) {
              this.direction = Direction.Left
            } else {
              this.location.row++
            }
            break

          default:
            break
        }
        setTimeout(() => {
          this.printSpiral()
        }, 10)
      }
    },
    completed() {
      const totalCells = this.rows * this.columns

      let visitedCount = 0
      this.matrix.forEach((row: Cell[]) => {
        row.forEach((cell: Cell) => {
          if (cell.visited) {
            visitedCount++
          }
        })
      })
      return totalCells === visitedCount
    },
    reset() {
      this.matrix.forEach((row: Cell[]) => {
        row.forEach((cell: Cell) => {
          cell.visited = false
        })
      })
    },
  },
})
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  padding: 2px 2px 2px 2px;
}

.number-item {
  padding: 4px 4px 4px 4px;
  transition: background-color 1s ease;
}
</style>
