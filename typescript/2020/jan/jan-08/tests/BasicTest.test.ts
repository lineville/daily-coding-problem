import { expect } from "chai";
import Basic from "../src/BasicTest";

xdescribe("Basic", function () {
  it("Hello", function () {
    let result = Basic.Hello("Liam");
    expect(result).equal("Hi Liam");
  });
});
