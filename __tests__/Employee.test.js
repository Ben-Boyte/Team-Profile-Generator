const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Ben", 2, "benjaminboyte13@aol.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})