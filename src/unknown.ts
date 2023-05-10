/**
 * どんな型の値もunknown型として扱うことができます。難しい言葉で言うと、これはいわゆるtop型です。
 * すなわち、never型のちょうど逆にあたる、すべての型を部分型として持つような、部分型関係の頂点にある型です。
 * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#unknown
 */
{
  const u1: unknown = 3;
  const u2: unknown = null;
  const u3: unknown = (foo: string)=> true;
}

/**
 * 任意の値を取ることができるというのは上で紹介したany型と同じ特徴ですが、unknown型はany型とは異なり安全に扱うことができる型です。
 * というのも、unknown型の値はどんな値なのか分からないため、できることが制限されているのです。
 * 例えば、数値の足し算をすることもできませんし、プロパティアクセスもできません。
 *
 * unknown型の値を使いたいときは、union型と同様に型の絞り込みが可能です。
 * これにより、unknown型の値として受け取った値が特定の型のときにのみ処理をするということが可能になります。
 *
 * また、クラスの型とinstanceofを組み合わせることによる絞り込みも可能です。
 */
{
  const u: unknown = 3;
// エラー: Object is of type 'unknown'.
  const sum = u + 5;
// エラー: Object is of type 'unknown'.
  const p = u.prop;
}
