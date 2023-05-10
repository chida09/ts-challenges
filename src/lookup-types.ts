/**
 * keyofとセットで使われることが多いのがLookup Typesです。
 * これは型TとKに対してT[K]という構文で書きます。
 * Kがプロパティ名の型であるとき、T[K]はTのそのプロパティの型となります。
 */

interface MyObj {
  foo: string;
  bar: number;
}

// strの型はstringとなる
const str: MyObj['foo'] = '123';
