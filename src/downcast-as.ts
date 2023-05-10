/**
 * これはTypeScript独自の構文で、式 as 型と書きます。
 * ダウンキャストなので当然型安全ではありませんが、TypeScriptを書いているとたまに必要になる場面があります。
 * なお、ダウンキャストというのは、派生型の値を部分型として扱うためのものです。
 */

{
  const value = rand(); // string | number
  const str = value as number;
  console.log(str * 10);

  function rand(): string | number {
    if (Math.random() < 0.5) {
      return 'hello';
    } else {
      return 123;
    }
  }
}
