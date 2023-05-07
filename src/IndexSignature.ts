/**
 * example
 */
function index() {
  interface Obj {
    [key: string]: number;
  }

  const obj: Obj = {
    foo: 1,
    bar: 2
  };

  console.log(obj["foo"]); // 1
  console.log(obj["bar"]); // 2
}

/**
 * リストを辞書のように使いたい場合、型安全の観点からIndexSignatureは非推奨
 * Mapを使うこと
 * https://susisu.hatenablog.com/entry/2021/11/13/222730
 */
function map() {
  const weekdays = new Map<string, string>([
    ["Sunday", "日曜日"],
    ["Monday", "月曜日"],
    ["Tuesday", "火曜日"],
    ["Wednesday", "水曜日"],
    ["Thursday", "木曜日"],
    ["Friday", "金曜日"],
    ["Saturday", "土曜日"]
  ]);
  console.log(weekdays.get("Monday")); // "月曜日"
  console.log(weekdays.get("M")); // "月曜日"

}

function indexSignature() {
  interface Weekdays {
    [day: string]: string;
  }

  const weekdays: Weekdays = {
    "Sunday": "日曜日",
    "Monday": "月曜日",
    "Tuesday": "火曜日",
    "Wednesday": "水曜日",
    "Thursday": "木曜日",
    "Friday": "金曜日",
    "Saturday": "土曜日"
  };

  console.log(weekdays["Monday"]); // "月曜日"
  console.log(weekdays["M"]); // undefined エラーにならない
}

/**
 * Mapを使う場合は、以下のようなメリットがあります。
 * 型安全性が高い
 * キーの重複を許可しないため、安全にデータを操作できる
 * キーと値をペアで扱うため、関連付けが容易である

 * 一方、Index signatureを使う場合は、以下のようなメリットがあります。
 * シンプルで扱いやすい
 * オブジェクトリテラルを使用できるため、コードの記述量が少なくなる
 * 軽量であり、処理速度が速い
 */
