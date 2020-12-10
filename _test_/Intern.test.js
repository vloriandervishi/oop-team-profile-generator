const Intern = require("../lib/Intern");
describe("make sure that getRole returns Intern", () => {
  test("getRole method returns Intern", () => {
    const int = new Intern();
    expect(int.getRole()).toBe("Intern");
  });
});

describe("Make sure constructor returns name, id,school", () => {
  const int = new Intern ("Bland", "abC112123778", "bland@bland.com", "random university");
  test("displays Name", () => {
    expect(int.name).toEqual(expect.any(String));
  });
  test("displays ID", () => {
    expect(int.id).toEqual(expect.any(String));
  });
  test("displays Email", () => {
    expect(int.email).toEqual(expect.any(String));
  });
  test("displays School", () => {
    expect(int.school).toEqual(expect.any(String));
  });
});
