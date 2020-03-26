const { repair, fail, succeed } = require("./enhancer.js");
const item1 = {
  name: "BSinator",
  durability: 100,
  enhancement: 20
};

const item2 = {
  name: "BFG 9000",
  durability: 30,
  enhancement: 16
};
const item3 = {
  name: "lightsaber",
  durability: 30,
  enhancement: 12
};

describe("Test Suite", () => {
  describe("Repair", () => {
    it("durability should be 100", () => {
      expect(repair(item3)).toStrictEqual({
        ...item3,
        durability: 100
      });
    });

    it("nothing else change", () => {
      expect(repair(item3)).toStrictEqual({
        ...item3,
        durability: 100
      });
    });
  });

  describe("Succeed", () => {
    it("enhancement+1", () => {
      expect(succeed(item3)).toStrictEqual({
        ...item3,
        enhancement: item3.enhancement + 1
      });
    });
    it("not altered if 20", () => {
      expect(succeed(item1)).toStrictEqual({
        ...item1,
        enhancement: 20
      });
    });
  });

  describe("Fail", () => {
    it("decrease durability by 5if<15", () => {
      expect(fail(item3)).toStrictEqual({
        ...item3,
        durability: item3.durability - 5
      });
    });

    it("-5durability + -1enhancement if >16", () => {
      expect(fail(item1)).toStrictEqual({
        ...item1,
        durability: item1.durability - 10,
        enhancement: item1.enhancement - 1
      });
    });

    it("if enhancement=16,-10 durability ", () => {
      expect(fail(item2)).toStrictEqual({
        ...item2,
        durability: item2.durability - 10
      });
    });
  });
});
