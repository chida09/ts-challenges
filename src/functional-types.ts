/**
 * 関数の型
 * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E9%96%A2%E6%95%B0%E5%9E%8B
 */
{
  const f: (arg: string) => number = func;

  function func(arg: string): number {
    return Number(arg);
  }

  const result: number = f('111');
  console.log(result); // 111
}
