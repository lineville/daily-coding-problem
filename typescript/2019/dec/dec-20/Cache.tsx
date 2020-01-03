import React from 'react'
import Queue from './queue'

export interface ICache {
  cache: Map<number, string>
  // queue: Queue<{ key: number; value: string }>
  maxSize: number
  allocatedMemory: number
  key: string
  value: string
  requestedKey: string
  requestedValue: string
}

export const Cache: React.SFC<ICache> = props => {
  return (
    <div>
      <h3>Total Memory: {props.maxSize}</h3>
      <h3>Allocated Memory: {props.allocatedMemory}</h3>
      {Array.from(props.cache, ([key, value]) => (
        <div key={key}>
          Key: {key} => Value: {value}
        </div>
      ))}
    </div>
  )
}
