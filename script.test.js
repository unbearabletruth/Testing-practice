const {capitalize, reverseString} = require('./script');

test("string is capitalized", () => {
  expect(capitalize("hey")).toBe("Hey");
});

test("reversed string", () => {
  expect(reverseString("hey")).toBe("yeh");
  expect(reverseString("unbearable")).toBe("elbaraebnu");
})