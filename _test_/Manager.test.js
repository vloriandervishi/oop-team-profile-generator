const Manager = require("../lib/Manager");
describe("make sure that getRole returns Manager", () => {
  test("getRole method returns Manager", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
  });
});

describe("Make sure constructor returns name, id,email,office number", () => {
  const manager = new Manager ("Kirby", "abCsdfsdf112123778", "kirby@kirby.com", '615-505-5050');
    test('Displays Name',()=>{
  expect(manager.name).toEqual(expect.any(String));
  });
  test("displays ID", () => {
    expect(manager.id).toEqual(expect.any(String));
  });
  test("displays Email", () => {
    expect(manager.email).toEqual(expect.any(String));
  });
  test("displays officeNumber", () => {
    expect(manager.officeNumber).toEqual(expect.any(String));
  });
});
