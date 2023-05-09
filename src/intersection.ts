/**
 * 交差型のこと
 * union型と対になるもの
 * 2つの型T, Uに対してT & Uと書くと、TでもありUでもあるような型を表します。
 */
{
  interface Hoge {
    foo: string;
    bar: number;
  }
  interface Piyo {
    foo: string;
    baz: boolean;
  }

  const obj: Hoge & Piyo = {
    foo: 'foooooooo',
    bar: 3,
    baz: true,
  };
}
