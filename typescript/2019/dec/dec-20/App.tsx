import React from 'react'
import { Cache, ICache } from './Cache'
import Queue from './queue'

class App extends React.Component<{}, ICache> {
  constructor(props: any) {
    super(props)

    this.state = {
      cache: new Map<number, string>(),
      // queue: new Queue<{ key: number; value: string }>(),
      maxSize: 10,
      allocatedMemory: 3,
      key: '',
      value: '',
      requestedKey: '',
      requestedValue: '',
    }
    this.state.cache.set(1, 'A')
    // this.state.queue.enqueue({ key: 1, value: 'A' })
    this.state.cache.set(2, 'B')
    // this.state.queue.enqueue({ key: 2, value: 'B' })
    this.state.cache.set(3, 'C')
    // this.state.queue.enqueue({ key: 3, value: 'C' })
  }

  handleChange = <T extends keyof ICache>(
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newState = {
      [e.target.name]: e.target.value,
    }
    this.setState(newState as { [P in T]: ICache[P] })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    this.setCache()
  }

  handleRequest = (event: any) => {
    event.preventDefault()
    const val =
      this.state.cache.get(parseInt(this.state.requestedKey)) || 'Not in cache'
    this.setState({ requestedValue: val })
  }

  // ! This the only method that needs to get modified based on caching policy,
  // ! This should be made generic enough to decouple the policy from the implementation
  setCache = () => {
    const valInCache = this.state.cache.get(parseInt(this.state.key))
    if (!valInCache && this.state.allocatedMemory >= this.state.maxSize) {
      // const entryToEvict =
      // * Pick an entry to evict (either LRU or LFU)
      // * remove that entry from the cache in setState
    }

    // * Need to update the queue here
    this.setState({
      cache: this.state.cache.set(parseInt(this.state.key), this.state.value),
      // * BUG: This should only increment if we add new entry, not update existing
      allocatedMemory: this.state.allocatedMemory + 1,
    })
  }

  render() {
    const {
      cache,
      maxSize,
      allocatedMemory,
      key,
      value,
      requestedKey,
      requestedValue,
      // queue,
    } = this.state

    return (
      <div>
        <h1>LFU Cache</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Key:
            <input type="text" name="key" onChange={this.handleChange} />
          </label>
          <label>
            Value:
            <input type="text" name="value" onChange={this.handleChange} />
          </label>
          <input
            type="submit"
            value="Add to Cache"
            onClick={this.handleSubmit}
          />
        </form>

        <form onSubmit={this.handleRequest}>
          <label>
            Key:
            <input
              type="text"
              name="requestedKey"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Get" onClick={this.handleRequest} />
          Value: {requestedValue}
        </form>

        <Cache
          cache={cache}
          maxSize={maxSize}
          allocatedMemory={allocatedMemory}
          key={key}
          value={value}
          requestedKey={requestedKey}
          requestedValue={requestedValue}
          // queue={queue}
        />
      </div>
    )
  }
}

export default App
