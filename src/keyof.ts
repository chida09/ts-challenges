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
