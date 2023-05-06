/**
 * TypeScriptにはintersection typeという機能があります。
 * これはT & Uのような構文をもつ型であり、意味としては「TでもありUでもある型」です。
 * 参考: https://qiita.com/uhyo/items/f5e4483b8e3005f3f5fc
 */

/**
 * mapped typeは{[P in K]: T}という構文を持つ型です。ここでPは型変数、KとTは何らかの型です。
 * ただし、Kはstringの部分型である必要があります。例えば、{[P in 'foo' | 'bar']: number}という型が可能です。
 * 参考: https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#mapped-types
 *
 * {[P in 'foo' | 'bar']: number} というのは{ foo: number; bar: number; }と同じ意味です。
 */

type Obj1 = { [P in 'foo' | 'bar']: number };

interface Obj2 {
  foo: number;
  bar: number;
}

const obj1: Obj1 = {foo: 3, bar: 5};
const obj2: Obj2 = obj1;
const obj3: Obj1 = obj2;

// ----------------------------------

type Ob1 = { foo: number, bar: number };

interface Ob2 {
  foo: number;
  bar: number;
}

const ob1: Ob1 = {foo: 3, bar: 5};
const ob2: Ob2 = obj1;
const ob3: Ob1 = obj2;
