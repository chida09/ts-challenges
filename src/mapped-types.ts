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
{
  // type Type = { [P in 'foo' | 'bar']: number };
  type Type = { foo: number, bar: number };

  interface Interface {
    foo: number;
    bar: number;
  }

  const obj1: Type = {foo: 3, bar: 5};
  const obj2: Interface = obj1;
  const obj3: Type = obj2;
}
// ----------------------------------
/**
 * ここでは型変数Tを持つ型PropNullable<T>を定義しました。
 * この型は、T型のオブジェクトの各プロパティPの型が、T[P] | null、すなわち元の型であるかnullであるかのいずれかであるようなオブジェクトの型です。
 * 具体的には、PropNullable<Foo>というのは{foo: string | null; bar: number | null; }という型になります。
 */
{
  type PropNullable<T> = {[P in keyof T]: T[P] | null};
  interface Foo {
    foo: string;
    bar: number;
  }

  const obj: PropNullable<Foo> = {
    foo: 'foobar',
    bar: null,
  };
}

{
  type IOptional<T> = {[P in keyof T]?: T[P]};
  interface Foo {
    foo: string;
    bar: number;
  }

  const obj: IOptional<Foo> = {
    foo: 'foobar',
    // bar: 1
  };
}

{
  type IRequired<T> = {[P in keyof T]-?: T[P]};

  interface Foo {
    foo: string;
    bar: number;
  }

  const obj: IRequired<Foo> = {
    foo: 'foobar',
    bar: 1
  };
}
