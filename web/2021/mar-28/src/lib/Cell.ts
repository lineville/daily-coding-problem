export default interface ICell {
  value: number
  visited: boolean
  readonly color: string
}

export class Cell implements ICell {
  value: number
  visited: boolean

  constructor(value: number, visited: boolean) {
    this.value = value
    this.visited = visited
  }

  get color() {
    return this.visited ? '#00FFFF' : '#FFFFFF'
  }
}
