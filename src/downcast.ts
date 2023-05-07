/**
 * ダウンキャスト（Downcast）とは、ある型からより具体的な型への型変換を行うことを指します。
 * すなわち、スーパータイプからサブタイプへの型変換のことです。
 * 例えば、以下のようなクラスがあるとします。
 */
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number) {
    console.log(`Moved ${distance} meters`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  meow() {
    console.log("Meow!");
  }
}

/**
 * この場合、CatクラスはAnimalクラスの派生型であり、CatクラスはAnimalクラスのすべての性質を継承しています。
 * したがって、CatクラスのインスタンスはAnimalクラスのインスタンスでもあるということになります。
 *
 * しかし、逆にAnimalクラスのインスタンスをCatクラスのインスタンスに変換することはできません。
 * これは、AnimalクラスにはCatクラスのメソッドmeow()が存在しないためです。
 * したがって、AnimalクラスのインスタンスをCatクラスのインスタンスに変換するには、明示的に型変換を行う必要があります。
 * これがダウンキャストです。
 */

const animal = new Animal("Tama");
const cat = animal as Cat;

/**
 * 上記のように、as演算子を使って、AnimalクラスのインスタンスをCatクラスのインスタンスにダウンキャストしています。
 * ただし、このようなダウンキャストは、実行時のエラーの原因となる可能性があるため、できる限り避けることが望ましいです。
 */
