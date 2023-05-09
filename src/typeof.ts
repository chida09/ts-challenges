/**
 * TypeScriptのちょっと便利な機能として、typeof型というのがあります。
 * これは、typeof 変数と書くと、その変数の型が得られるものです。
 * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#typeof
 */
{
  let foo = 'str';
  type FooType = typeof foo; // FooTypeはstringになる
  const str: FooType = 'abcdef';
}
