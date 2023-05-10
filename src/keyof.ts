/**
 * 使い方
 */
{
  interface MyObj {
    foo: string;
    bar: number;
  }

  let key: keyof MyObj;
  key = 'bar';
  console.log(key) // bar
}

// --------------------------------------------

/**
 * keyofはobjectのkeyを利用する
 */
{
  interface UserInfo {
    name: string
    age: number
  }

  const userInfo = {
    name: 'yamada',
    age: 22
  }

// この場合、targetはnameかageになる
  function testRun(info: UserInfo, target: keyof UserInfo) {
    const keys = info[target]
    return keys
  }

  const result = testRun(userInfo, 'name')
  console.log(result) // "yamada"
}

// --------------------------------------------

/**
 * keyof型にはnumberの部分型が含まれる場合もあります。
 * それは、数値リテラルを使ってプロパティを宣言した場合です。
 * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#keyof
 *
 * JavaScriptではプロパティ名に数値は使えません（使おうとした場合文字列に変換されます）が、
 * TypeScriptでは数値をプロパティ名に使用した場合は型の上ではそれを保とうとするということです。
 */
{
  const obj = {
    foo: 'str',
    0: 'num',
  };

  // ObjType = 0 | 'foo'
  type ObjType = keyof (typeof obj);
}
