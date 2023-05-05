/**
 * keyofはobjectのkeyを利用する
 */
interface UserInfo {
  name: string
  age: number
}

const userInfo = {
  name: 'yamada',
  age: 22
}

// この場合、targetはnameかageになる
function test(info: UserInfo, target: keyof UserInfo) {
  const keys = info[target]
  return keys
}

const result = test(userInfo, 'name')
const result2 = test(userInfo, 'age')
console.log(result, result2) // "yamada",  22
