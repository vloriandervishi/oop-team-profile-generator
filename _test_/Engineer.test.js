const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer");

describe("make sure that getRole returns Engineer", () => {
  test("getRole method returns Engineer", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
  });
});

describe("Make sure constructor returns name, id,github", () => {
  const eng = new Engineer("Joe", "abC778", "joe@joe.com", "jOESHMOE##");
  test("displays Name", () => {
    expect(eng.name).toEqual(expect.any(String));
    //   expect(eng.github).toBe(String);
    //   expect(eng.id).toBe(String);
    //   expect(eng.email).toBe(String);
  });
  test("displays ID", () => {
    // expect(eng.github).toBe(String);
    expect(eng.id).toEqual(expect.any(String));
    // expect(eng.email).toBe(String);
  });
  test("displays Email", () => {
    // expect(eng.github).toBe(String);

    expect(eng.email).toEqual(expect.any(String));
  });
  test("displays GitHub", () => {
    expect(eng.github).toEqual(expect.any(String));
  });
});
