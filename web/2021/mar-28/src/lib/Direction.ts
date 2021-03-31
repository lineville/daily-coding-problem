enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export const nextDirection = (
  direction: Direction,
  reverse = false
): Direction => {
  if (reverse) {
    switch (direction) {
      case Direction.Up:
        return Direction.Right
      case Direction.Down:
        return Direction.Left
      case Direction.Left:
        return Direction.Up
      case Direction.Right:
        return Direction.Down
      default:
        return Direction.Right
    }
  } else {
    switch (direction) {
      case Direction.Up:
        return Direction.Left
      case Direction.Down:
        return Direction.Right
      case Direction.Left:
        return Direction.Down
      case Direction.Right:
        return Direction.Up
      default:
        return Direction.Left
    }
  }
}

export const oppositeDirection = (direction: Direction): Direction => {
  switch (direction) {
    case Direction.Up:
      return Direction.Down
    case Direction.Down:
      return Direction.Up
    case Direction.Left:
      return Direction.Right
    case Direction.Right:
      return Direction.Left
    default:
      return Direction.Right
  }
}

export default Direction
