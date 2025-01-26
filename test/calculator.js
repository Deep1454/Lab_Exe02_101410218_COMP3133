const { add, sub, mul, div } = require("../app/calculator.js"); 
const { expect } = require("chai");

describe("Calculator Tests", () => {
    it("add(7, 7) expected result 14 PASS", () => {
        const result = add(7, 7);
        expect(result).to.equal(14);
    });

    it("add(7, 7) expected result 15 FAIL", () => {
        const result = add(7, 7);
        expect(result).to.equal(15);
    });

    it("sub(7, 7) expected result 0 PASS", () => {
        const result = sub(7, 7);
        expect(result).to.equal(0);
    });

    it("sub(7, 7) expected result 7 FAIL", () => {
        const result = sub(7, 7);
        expect(result).to.equal(7);
    });

    it("mul(7, 7) expected result 49 PASS", () => {
        const result = mul(7, 7);
        expect(result).to.equal(49);
    });

    it("mul(7, 7) expected result 47 FAIL", () => {
        const result = mul(7, 7);
        expect(result).to.equal(47);
    });

    it("div(7, 7) expected result 1 PASS", () => {
        const result = div(7, 7);
        expect(result).to.equal(1);
    });

    it("div(7, 7) expected result 7 FAIL", () => {
        const result = div(7, 7);
        expect(result).to.equal(7);
    });
});

