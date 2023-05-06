/**
 * declareは、既存のJavaScriptコードに型情報を付与するために使用される、TypeScriptのキーワードの1つです。
 * declareを使用することで、TypeScriptはコードの実行時に使用可能なJavaScriptオブジェクトを認識できます。
 * 具体的には、declareを使用することで、TypeScriptは既存のJavaScriptライブラリやオブジェクトの型情報を定義できます。
 * これにより、TypeScriptコードでJavaScriptオブジェクトを使用する際に、型エラーを回避することができます。
 * 例えば、以下のようなdeclareの使用例があります。
 */

declare const $: {
  (selector: string): any;
};

const element = $('#my-element');

/**
 * この例では、$関数がstring型の引数を受け取り、何らかの値を返すということをTypeScriptに伝えるために、declareを使用しています。
 * $関数を実際に定義しているわけではなく、あくまでも型情報を提供しています。
 * このようにして、TypeScriptはコードの実行時に$関数が使用可能であることを認識することができます。
 * declareは、主にJavaScriptの既存のコードに型情報を付与するために使用されますが、型情報の付与に限らず、変数や関数の宣言などにも使用されることがあります。
 */
