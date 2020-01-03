class Queue<T> {
  queue: Array<T>

  constructor(vals?: Array<T>) {
    this.queue = vals ? vals : []
  }

  enqueue = (val: T): void => {
    this.queue.push(val)
  }

  dequeue = (): T => {
    if (this.isEmpty()) {
      throw new Error('Empty queue')
    }
    return this.queue[0]
  }

  peek = (): T => {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.queue[0]
  }

  clear = (): void => {
    this.queue = []
  }

  isEmpty = (): boolean => {
    return this.queue.length === 0
  }

  // ! Takes O(N) don't use in LRU
  max = (): T => {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }

    let max: T = this.queue[0]

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] > max) {
        max = this.queue[i]
      }
    }
    return max
  }

  print = (): void => {
    for (let i = 0; i < this.queue.length; i++) {
      console.log(this.queue[i])
    }
  }
}

export default Queue
