import { getType } from "typechecker";

describe("type", () => {
  // 配列を作る
  const array = [1, 2, 3, 4];

  it("配列の型は？", () => {
    // 配列の型は？
    const res = getType(array);
    expect(res).toEqual("array");
  });

  it("配列の 0 番目には入っているのは？", () => {
    // 配列の 0 番目には入っているのは？
    const res = array[0];
    expect(res).toEqual(1); // 数字
  });

  it("配列の 0 番目の値の型は？", () => {
    // 配列の 0 番目の型は？
    const res = getType(array[0]);
    expect(res).toEqual("number");
  });
});
