import { Employee } from "../types/Employee";

export function deleteRandomEmployee(employees: Employee[]): Employee[] {
    const randomIndex = Math.floor(Math.random() * employees.length);
    return [...employees.slice(0, randomIndex), ...employees.slice(randomIndex + 1)];
}
