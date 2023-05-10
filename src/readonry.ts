/**
 * obj
 * { foo: string; bar: number[] }
 */

/**
 * obj2
 * { readonly foo: "123"; readonly bar: readonly [1, 2, 3]; }
 */
{
  const obj = {
    foo: "123",
    bar: [1, 2, 3]
  };

  const obj2 = {
    foo: "123",
    bar: [1, 2, 3]
  } as const;

  console.log(obj)
  console.log(obj2)
}
