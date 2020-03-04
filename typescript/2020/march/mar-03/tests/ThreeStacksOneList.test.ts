import { expect } from "chai";
import TripleStack from "../src/ThreeStacksOneList";

describe("Three stacks one list", () => {

  var tripleStack : TripleStack<number>;
  beforeEach(() => {
    tripleStack  = new TripleStack(15);
  });


  it("Push to each stack and pop the values back", () => {
    tripleStack.push(1, 0);
    tripleStack.push(2, 1);
    tripleStack.push(3, 2);
    const result1 : number | undefined = tripleStack.pop(0);
    const result2 : number | undefined = tripleStack.pop(1);
    const result3 : number | undefined = tripleStack.pop(2);
    expect(result1).to.equal(1);
    expect(result2).to.equal(2);
    expect(result3).to.equal(3);
  });

  it("Push more values onto last stack", () => {
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    
    tripleStack.push(2, 1);
    tripleStack.push(2, 1);
    tripleStack.push(2, 1);
    
    tripleStack.push(3, 2);
    tripleStack.push(3, 2);
    tripleStack.push(3, 2);
    tripleStack.push(3, 2);
    tripleStack.push(3, 2);
    tripleStack.push(3, 2);
    
    tripleStack.print();
  });


  it("Push more values onto first stack", () => {
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    tripleStack.push(1, 0);
    
    tripleStack.push(2, 1);
    tripleStack.push(2, 1);
    tripleStack.push(2, 1);
    
    tripleStack.print();
  });
});
