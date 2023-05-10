/**
 * 例えばIsNumberの様にGenerics型であるTが、number型のサブタイプであればbooleanリテラル型のtrueを返し、それ以外の場合はfalseを返します
 * https://zenn.dev/oreo2990/articles/1040312d7af066
 */
type IsNumber<T> = T extends number ? true : false;

type T1 = IsNumber<10>;       //type T1 = true
type T2 = IsNumber<"テスト">;  //type T2 = false
type T3 = IsNumber<number>;   //type T3 = true

/**
 * infer
 * inferはConditional TypeT extends U ? X : YのUの部分で使うキーワードで、Uの型の条件とマッチした型を抽出し、それをX、Yで利用することができます。
 * ユーティリティ型のReturnTypeを、MyReturnTypeとして定義してみる
 */
type MyReturnType<T> = T extends (...args:any[])=> infer R ? R : never
