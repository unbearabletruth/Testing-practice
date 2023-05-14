const {capitalize, reverseString, Calculator, caesarCipher, analyseArray} = require('./script');

test("string is capitalized", () => {
  expect(capitalize("hey")).toBe("Hey");
});

test("reversed string", () => {
  expect(reverseString("hey")).toBe("yeh");
  expect(reverseString("unbearable")).toBe("elbaraebnu");
});

test("calculated", () => {
  expect(new Calculator(2, 5).add()).toBe(7);
  expect(new Calculator(10, 3).substract()).toBe(7);
  expect(new Calculator(4, 9).multiply()).toBe(36);
  expect(new Calculator(8, 2).divide()).toBe(4);
});

test("into Caesar cipher", () => {
  expect(caesarCipher("sun", 1)).toBe("tvo");
  expect(caesarCipher("zoo", 2)).toBe("bqq");
  expect(caesarCipher("chimp", 0)).toBe("chimp");
  expect(caesarCipher("hey, there", 1)).toBe("ifz, uifsf");
});

test("analysed array", () => {
  expect(analyseArray([5, 3, 4, 6])).toEqual({average: 4.5, min: 3, max: 6, length: 4});
})