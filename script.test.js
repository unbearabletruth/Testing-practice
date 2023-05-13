const capitalize = require('./script');

test("string is capitalized", () => {
  expect(capitalize("hey")).toBe("Hey");
});