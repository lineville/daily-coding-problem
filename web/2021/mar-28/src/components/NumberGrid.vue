<template>
  <h3>Spiral Number Traversal</h3>

  <div>
    <div class="inputContainer">
      <label for="colorSelector">Color</label>
      <input id="colorSelector" type="color" v-model="visitedColor" />

      <label for="rowsSelector">Rows</label>
      <input id="rowsSelector" type="number" v-model="rows" min="1" max="25" />

      <label for="speedSelector">Speed</label>
      <input
        id="speedSelector"
        type="range"
        min="0"
        v-bind:max="maxSpeed"
        v-model="speed"
      />

      <label for="columnsSelector">Columns</label>
      <input
        id="columnsSelector"
        type="number"
        v-model="columns"
        min="1"
        max="25"
      />
    </div>

    <div class="inputContainer">
      <button v-on:click="spiralTraversal">🌀 Simulate Spiral Traversal</button>
      <button v-on:click="stopTraversal">🛑 Stop</button>
      <button v-on:click="reset">🔄 Reset</button>
      <button v-on:click="reverse">⏪ Reverse</button>
    </div>
  </div>

  <ul>
    <li v-for="(row, rIdx) in matrix" v-bind:key="row">
      <span
        v-for="(cell, cIdx) in row"
        v-bind:key="cIdx"
        class="number-item"
        v-on:click="() => setLocation(rIdx, cIdx)"
        v-bind:style="{
          backgroundColor: cell.visited ? visitedColor : 'white',
          border:
            rIdx === location.row && cIdx === location.column
              ? 'solid 1px black'
              : 'none',
        }"
      >
        {{ cell.value }}
      </span>
    </li>
  </ul>

  <hr />

  <div id="outputNumbersContainer" v-if="false">
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
import Direction, { nextDirection, oppositeDirection } from '../lib/Direction'
import Cell from '../lib/Cell'

export default defineComponent({
  name: 'NumberGrid',
  data: function () {
    return {
      rows: 10,
      columns: 10,
      maxNumber: 10,
      location: {
        row: 0,
        column: 0,
      },
      direction: Direction.Right,
      outputNumbers: new Array<Number>(),
      stopped: false,
      clockwise: true,
      maxSpeed: 2000,
      visitedColor: '#00FFFF',
      speed: 2000, // ms per iteration of the simulation
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
              this.direction = nextDirection(this.direction, this.clockwise)
            } else {
              this.location.column++
            }
            break

          case Direction.Left:
            shouldTurn =
              this.location.column === 0 ||
              this.matrix[this.location.row][this.location.column - 1].visited

            if (shouldTurn) {
              this.direction = nextDirection(this.direction, this.clockwise)
            } else {
              this.location.column--
            }
            break

          case Direction.Up:
            shouldTurn =
              this.location.row === 0 ||
              this.matrix[this.location.row - 1][this.location.column].visited

            if (shouldTurn) {
              this.direction = nextDirection(this.direction, this.clockwise)
            } else {
              this.location.row--
            }
            break

          case Direction.Down:
            shouldTurn =
              this.location.row === this.rows - 1 ||
              this.matrix[this.location.row + 1][this.location.column].visited

            if (shouldTurn) {
              this.direction = nextDirection(this.direction, this.clockwise)
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
      this.matrix.forEach((row: Cell[]) => {
        row.forEach((cell: Cell) => {
          if (cell.visited) {
            visitedCount++
          }
        })
      })
      const allFull = totalCells === visitedCount
      return allFull || this.isSurrounded()
    },
    isSurrounded() {
      const left =
        this.location.column === 0 ||
        this.matrix[this.location.row][this.location.column - 1].visited
      const right =
        this.location.column === this.columns - 1 ||
        this.matrix[this.location.row][this.location.column + 1].visited
      const above =
        this.location.row === 0 ||
        this.matrix[this.location.row - 1][this.location.column].visited
      const below =
        this.location.row === this.rows - 1 ||
        this.matrix[this.location.row + 1][this.location.column].visited

      return (
        left &&
        right &&
        above &&
        below &&
        this.matrix[this.location.row][this.location.column].visited
      )
    },
    setLocation(row, column) {
      this.location = { row, column }
    },
    reset() {
      this.matrix.forEach((row: Cell[]) => {
        row.forEach((cell: Cell) => {
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
    reverse() {
      this.clockwise = !this.clockwise
      this.direction = oppositeDirection(this.direction)
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
  margin-bottom: 1px;
}

label {
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
  padding: 2px 2px 2px 2px;
  transition: background-color 1s ease;
  box-sizing: border-box;
}

.inputContainer {
  margin: 5px 5px 5px 5px;
}
</style>
