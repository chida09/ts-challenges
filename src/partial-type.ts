/**
 * TypeScriptでは構造的部分型を採用しているため、次のようなことが可能です。
 * MyObj2というのはfooプロパティだけを持つオブジェクトの型ですが、MyObj2型変数にMyObj型の値aを代入することができています。
 * MyObj型の値はstring型のプロパティfooを持っているためMyObj2型の値の要件を満たしていると考えられるからです。
 * ちなみに、一般にこのような場合MyObjはMyObj2の部分型であると言います。
 */

{
  interface MyObj {
    foo: string;
    bar: number;
  }

  interface MyObj2 {
    foo: string;
  }

  const a: MyObj = {foo: 'foo', bar: 3};
  const b: MyObj2 = a;
}
