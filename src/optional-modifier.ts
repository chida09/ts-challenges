/**
 * ?: 省略可能なプロパティ
 * ?を付けて宣言したプロパティは省略可能になります。
 * JSのオプショナルチェーンとは別物
 */
{
  interface MyObj {
    foo: string;
    bar?: number;
  }

  let obj: MyObj = {
    foo: 'string',
  };

  obj = {
    foo: 'foo',
    bar: 100,
  };
}

// -------------------------------

{
// type PropNullable<T> = {[P in keyof T]: T[P] | null};
  type PropNullable<T> = {[P in keyof T]?: T[P]};


  interface Foo {
    foo: string;
    bar: number;
  }

  const obj: PropNullable<Foo> = {
    foo: 'foobar',
    // bar: number;
  };

  console.log(obj)
}
