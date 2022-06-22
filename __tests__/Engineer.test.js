const Intern = require("../lib/Intern");

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Ben", 2, "benjaminboyte13@aol.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});