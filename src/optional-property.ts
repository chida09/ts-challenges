/**
 * ?修飾子を付けられたプロパティを取得する場合は自動的にundefined型とのunion型になります。
 * よって、それを使う側はこのようにundefinedチェックを行う必要があります。
 */
function func(obj: MyObj): number {
  return obj.bar !== undefined ? obj.bar * 100 : 0;
}

/**
 * 多くの場合、bar?: number;よりもbar: number | undefinedを優先して使用することをお勧めします。
 * 前者はbarが無い場合に本当に無いのか書き忘れなのか区別ができず、ミスの原因になります。後者の場合は書き忘れを防ぐことができます。
 * その他のオブジェクトが長期間生存するようなケースでは、そもそもオプショナルなプロパティ自体を避けましょう
 * https://susisu.hatenablog.com/entry/2021/07/13/000239
 */

/**
 * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#exactoptionalpropertytypes%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%81%AE%E9%96%A2%E4%BF%82
 * exactOptionalPropertyTypes オプションを有効にすることを推奨する
 */
