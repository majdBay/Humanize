import { employees } from "../mock/Employees";
import { Employee } from "../types/Employee";

export const getEmployees = (): Promise<Employee[]> => {
    return Promise.resolve(employees);
};
