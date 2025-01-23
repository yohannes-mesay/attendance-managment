import axios from "axios";
export const getEmployees = async () => {
  const { data } = await axios.get("http://192.168.64.1:8000/employees");
  return data;
};
export const createEmployee = async (employee) => {
  const { data } = await axios.post(
    "http://192.168.64.1:8000/employees",
    employee
  );
  return data;
};
export const editEmployee = async (employee) => {
  const { data } = await axios.put(
    `http://192.168.64.1:8000/employees/${employee.id}`,
    employee
  );
  return data;
};
export const deleteEmployee = async (id) => {
  const { data } = await axios.delete(
    `http://192.168.64.1:8000/employees/${id}`
  );
  return data;
};
