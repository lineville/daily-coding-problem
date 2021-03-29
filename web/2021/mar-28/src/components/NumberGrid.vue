<template>
  <h3>Spiral Number Traversal</h3>

  <ul>
    <li v-for="row in matrix" v-bind:key="row">
      <span
        v-for="(cell, cIdx) in row"
        v-bind:key="cIdx"
        class="number-item"
        v-bind:style="{ backgroundColor: cell.color }"
      >
        {{ cell.value }}
      </span>
    </li>
  </ul>

  <p>Location: ({{ location.column }}, {{ location.row }})</p>

  <label for="speedSelector">Speed</label>
  <input
    id="speedSelector"
    type="range"
    min="0"
    v-bind:max="maxSpeed"
    v-model="speed"
  />

  <button v-on:click="spiralTraversal">🌀 Simulate Spiral Traversal</button>
  <button v-on:click="stopTraversal">🛑 Stop</button>
  <button v-on:click="reset">🔄 Reset</button>

  <hr />

  <div id="outputNumbersContainer">
    <span
      v-for="(num, idx) in outputNumbers"
      v-bind:key="idx"
      class="number-item"
    >
      {{ num }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Direction from '../lib/Direction'
import ICell, { Cell } from '../lib/Cell'

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
    maxNumber: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      matrix: Array.from({ length: this.rows }, () =>
        Array.from(
          { length: this.columns },
          () => new Cell(Math.floor(Math.random() * this.maxNumber), false)
        )
      ),
      location: {
        row: 0,
        column: 0,
      },
      direction: Direction.Right,
      outputNumbers: new Array<Number>(),
      stopped: false,
      maxSpeed: 1500,
      speed: 1000, // ms per iteration of the simulation
    }
  },
  methods: {
    spiralTraversal() {
      this.stopped = false
      this.spiralTraversalHelper()
    },
    spiralTraversalHelper() {
      // * If grid is not all visited
      if (!this.completed() && !this.stopped) {
        // * Mark the current location as visited, update the color and push the value to outputNumbers
        this.matrix[this.location.row][this.location.column].visited = true
        this.outputNumbers.push(
          this.matrix[this.location.row][this.location.column].value
        )

        // * Update the next location by moving in the current direction or turning
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

        // * Make recursive calls to spiralTraversal after (speed) ms
        setTimeout(() => {
          this.spiralTraversalHelper()
        }, this.maxSpeed - this.speed)
      }
    },
    completed() {
      const totalCells = this.rows * this.columns

      let visitedCount = 0
      this.matrix.forEach((row: ICell[]) => {
        row.forEach((cell: ICell) => {
          if (cell.visited) {
            visitedCount++
          }
        })
      })
      return totalCells === visitedCount
    },
    reset() {
      this.matrix.forEach((row: ICell[]) => {
        row.forEach((cell: ICell) => {
          cell.visited = false
        })
      })
      this.location = { row: 0, column: 0 }
      this.direction = Direction.Right
      this.outputNumbers = new Array()
    },
    stopTraversal() {
      this.stopped = true
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

button {
  padding: 2px 2px 2px 2px;
  margin: 2px 2px 2px 2px;
  border-radius: 5px;
  opacity: 0.7;
}

#outputNumbersContainer {
  max-width: 80%;
  margin: auto;
  overflow-wrap: break-word;
}

.number-item {
  padding: 4px 4px 4px 4px;
  transition: background-color 1s ease;
}
</style>
