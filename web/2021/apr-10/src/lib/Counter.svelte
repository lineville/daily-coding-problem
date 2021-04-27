<script lang="ts">
  let count: number = 1

  const increment = () => {
    count += 1
  }

  const decrement = () => {
    count -= 1
  }

  const double = () => {
    count *= 2
  }

  const half = () => {
    count /= 2
  }
</script>


<button on:click={double}>
  2x
</button>

<button on:click={half}>
  1/2
</button>

<br />
<br />

<button on:click={increment}>
  +1
</button>

<button on:click={decrement}>
  -1
</button>

<p>{count}</p>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
