const assert = require("chai").assert;

const app = require("../index");

describe("Index test", () => {
  it("Should return correct age by birth date", () => {
    assert.equal(app("8/17/1981"), 38);
  });

  it("Should return incorrect age if birth date is wrong", () => {
    assert.notEqual(app("8/17/1981", 43));
  });

  it("Should return type of number", () => {
    assert.typeOf(app("8/17/1981"), "number");
  });

  // if statements
  it("Should return undefined if value is empty", () => {
    assert.equal(app(""), undefined);
  });

  it("Should return zero age if the birthdate is more than the current date", () => {
    assert.equal(app("8/17/2029"), 0);
  });

  // formats
  it("Should return age by Long Date format", () => {
    assert.equal(app("Aug 17 1981"), 38);
  });

  it("Should return age by ISO Date format", () => {
    assert.equal(app("1981-08-17"), 38);
  });

  it("Should return age by Short Date format", () => {
    assert.equal(app("08/17/1981"), 38);
  });

  it("Should return age by Date Parse value", () => {
    assert.equal(app("August 17, 1981"), 38);
  });

  it("Should return age from birth date object value", ()=>{
      let date = new Date("08/17/1981");
      assert.equal(app(date), 38)
  })
});
