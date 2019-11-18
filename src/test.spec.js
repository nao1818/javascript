import { getType } from "typechecker";

describe("type", () => {
  it("string", () => {
    const string = "hello world";
    const res = getType(string);
    expect(res).toEqual("string");
  });

  it("number", () => {
    const number = 1;
    const res = getType(number);
    expect(res).toEqual("number");
  });

  it("array", () => {
    const array = [1, 2, 3];
    const res = getType(array);
    expect(res).toEqual("array");
  });

  it("object", () => {
    const object = {
      name: "nakanishi",
      age: 34
    };
    const res = getType(object);
    expect(res).toEqual("object");
  });

  it("function", () => {
    const func = () => "hello";
    const res = getType(func);
    expect(res).toEqual("function");
  });
});
