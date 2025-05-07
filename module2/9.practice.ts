/* Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining. */

type Employee = {
  name: string;
  address?: {
    city?: string;
    zip?: string;
  };
};

const employee: Employee = {
  name: "Ayesha",
  address: {
    city: "Toronto",
    zip: "M4B1B3",
  },
};

const getEmployeeCity = (employee: Employee) => {
  return employee?.address?.city;
};

console.log(getEmployeeCity(employee));
