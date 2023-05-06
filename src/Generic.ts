/**
 * Object
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

// -------------------------------------------

type Data2<T, K> = {
  value1: T
  value2: K
}

const data2: Data2<number, string> = {
  value1: 123,
  value2: "hello"
}
console.log(data2) // { value1: 123, value2: "hello" }


/**
 * Function 1
 */
function test<T>(arg: T): T {
  return arg;
}

console.log(test(1)); // 1
console.log(test("Hello")); // "Hello"
console.log(test(true)); // true

// 引数2つ
function test<T, K>(arg: T, arg2: K): T {
  return arg
}
console.log(test(1, 2)); // 1

/**
 * Function 2
 */
interface Some<T> {
  type: 'Some';
  value: T;
}
function getValue<T>(value: T): Some<T> {
  return {
    type: 'Some',
    value: value
  };
}

const someValue = getValue(123);
console.log(someValue); // { type: 'Some', value: 123 }

const someString = getValue("Hello");
console.log(someString); // { type: 'Some', value: "Hello" }
