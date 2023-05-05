/**
 * Generic使わない
 */
type Data = {
  value1: number
  value2: string
}

const data: Data = {
  value1: 123,
  value2: "hello"
}
console.log(data) // { value1: 123, value2: "hello" }

/**
 * Generic使う
 */
type Data2<T, K> = {
  value1: T
  value2: K
}

const data2: Data2<number, string> = {
  value1: 123,
  value2: "hello"
}
console.log(data2) // { value1: 123, value2: "hello" }
