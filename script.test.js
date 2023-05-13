const {capitalize, reverseString, Calculator} = require('./script');

test("string is capitalized", () => {
  expect(capitalize("hey")).toBe("Hey");
});

test("reversed string", () => {
  expect(reverseString("hey")).toBe("yeh");
  expect(reverseString("unbearable")).toBe("elbaraebnu");
})

test("calculated", () => {
  expect(new Calculator(2, 5).add()).toBe(7);
  expect(new Calculator(10, 3).substract()).toBe(7);
  expect(new Calculator(4, 9).multiply()).toBe(36);
  expect(new Calculator(8, 2).divide()).toBe(4);
})