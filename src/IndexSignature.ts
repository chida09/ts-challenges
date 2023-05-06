interface Obj {
  [key: string]: number;
}

const obj: Obj = {
  foo: 1,
  bar: 2
};

console.log(obj["foo"]); // 1
console.log(obj["bar"]); // 2
