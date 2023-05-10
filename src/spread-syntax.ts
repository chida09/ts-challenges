/**
 * [...T]は一見Tと全く同じ意味であるように見えますが、
 * ジェネリクスと組み合わされた場合はちょっとした違いを生みます。
 */
{
  function func1<T extends readonly unknown[]>(arr: T): T {
    return arr;
  }
  function func2<T extends readonly unknown[]>(arr: [...T]): T {
    return arr;
  }
// const arr1: number[]
  const arr1 = func1([1, 2, 3]);

// const arr2: [number, number, number]
  const arr2 = func2([1, 2, 3]);
}

/**
 * この例のように、型引数の推論時に配列がT型の引数に当てはめられた場合は配列型が推論されますが、[...T]型の引数に当てはめられた場合はタプル型が推論されます。
 * 関数に渡された配列の各要素の型を得たいのに配列型になってしまうという場面で活用できるかもしれません。
 */
