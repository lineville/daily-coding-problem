import React from 'react'

class App extends React.Component<
  {},
  {
    cache: Map<number, string>
    maxSize: number
    allocatedMemory: number
    key: string
    value: string
  }
> {
  constructor(props: any) {
    super(props)

    this.state = {
      cache: new Map<number, string>(),
      maxSize: 10,
      allocatedMemory: 0,
      key: '',
      value: '',
    }
    this.state.cache.set(1, 'A')
    this.state.cache.set(2, 'B')
    this.state.cache.set(3, 'C')
  }

  handleValChange = (event: any) => {
    this.setState({ value: event.target.value })
  }

  handleKeyChange = (event: any) => {
    this.setState({ key: event.target.value })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    this.setCache()
  }

  setCache = () => {
    // let newCache: Map<number, string> = this.state.cache.set(
    //   parseInt(this.state.key),
    //   this.state.value
    // )

    let existingValue = this.state.cache.get(parseInt(this.state.key))
    if (
      this.state.allocatedMemory === this.state.maxSize &&
      existingValue === null
    ) {
      // * Find a better mechanism to delete
      // let evicted = this.queue.dequeue()
      // newCache.delete(evicted.key)
      console.log('Should evict')
    }

    // this.queue.enqueue({ key, value })
    // this.setState(prevState => {
    //   const newCache: Map<number, string> = new Map(prevState.cache)
    //   newCache.set(parseInt(this.state.key), this.state.value)
    //   return newCache
    // })

    // // * If we added a new entry to cache, update allocated
    // if (
    //   this.state.allocatedMemory < this.state.maxSize &&
    //   existingValue === null
    // ) {
    //   this.state.allocatedMemory++
    // }
  }

  render() {
    return (
      <div>
        <h1>LFU Cache</h1>
        {this.state.cache.toString()}

        <form onSubmit={this.handleSubmit}>
          <label>
            Key:
            <input type="text" name="key" onChange={this.handleKeyChange} />
          </label>
          <label>
            Value:
            <input type="text" name="value" onChange={this.handleValChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default App
