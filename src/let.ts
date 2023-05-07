/**
 * 型推論はletで宣言されている場合、プリミティブ型になる
 * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E3%83%AA%E3%83%86%E3%83%A9%E3%83%AB%E5%9E%8B%E3%81%A8%E5%9E%8B%E6%8E%A8%E8%AB%96
 */

const c = 'const test'
console.log(c) // 型推論では "const test" となる

let l = 'let test'
console.log(l) // 型推論では string となる
