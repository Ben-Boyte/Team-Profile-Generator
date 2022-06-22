const Manager = require("../lib/Manager");

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Ben", 2, "benjaminboyte13@aol.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});