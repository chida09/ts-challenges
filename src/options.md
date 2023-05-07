## nullまたはundefinedが許容されないコードを検出する
strictNullChecks

## ?: 省略可能なプロパティを無効にする
exactOptionalPropertyTypes

```ts
type Person = {
  name: string;
  age?: number;
};

const person1: Person = { name: "Alice" };
const person2: Person = { name: "Bob", age: 30 };
```
上記の例では、Person型のageプロパティがオプションとなっています。
exactOptionalPropertyTypesオプションが有効でない場合、ageプロパティの型はnumber | undefinedと推論されます。
つまり、person1オブジェクトにageプロパティが存在しない場合、その型はundefinedとなります。

しかし、exactOptionalPropertyTypesオプションが有効になっている場合、ageプロパティの型はnumberと推論されます。
つまり、person1オブジェクトにageプロパティが存在しない場合、その型はundefinedではなくnumberとなります。
