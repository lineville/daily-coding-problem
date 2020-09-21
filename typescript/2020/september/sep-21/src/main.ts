export function customReduce<T>(
  arr: Array<T>,
  reducer: (a: T, b: T) => any,
  initValue: T
) {
  let result = initValue
  for (const val of arr) {
    result = reducer(result, val)
  }
  return result
}
