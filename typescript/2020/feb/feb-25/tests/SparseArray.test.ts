import { expect } from "chai";
import SparseArray from "../src/SparseArray";

describe("SparseArray", function() {
  it("get", function() {
    let original: Array<number> = new Array<number>(500).fill(0);
    original[100] = 1;
    original[101] = 2;
    original[102] = 3;
    original[103] = 4;
    original[350] = 5;
    original[400] = 6;
    original[422] = 7;
    original[498] = 8;
    
    const sparseArray = new SparseArray(original);
    sparseArray.print();

    // console.log(original[100])
    // console.log(sparseArray.get(101))

    // expect(original[100]).to.equal(sparseArray.get(100));
    // expect(sparseArray.get(101)).to.eql(original[101]);
    // expect(sparseArray.get(102)).to.eql(original[102]);
    // expect(sparseArray.get(103)).to.eql(original[103]);
    // expect(sparseArray.get(350)).to.eql(original[350]);
    // expect(sparseArray.get(400)).to.eql(original[400]);
    // expect(sparseArray.get(422)).to.eql(original[422]);
    // expect(sparseArray.get(498)).to.eql(original[498]);
  });
});
