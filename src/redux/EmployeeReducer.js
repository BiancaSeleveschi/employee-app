import { createSlice } from "@reduxjs/toolkit";
import { employeeList } from "./Data";
const employeeSlice = createSlice({
  name: "employees",
  initialState: employeeList,
  reducers: {
    setEmployees: (state, action) => {
      return employeeList.filter((e) => e.position === action.payload);
    },
    resetEmployees: (state) => {
      return employeeList;
    },
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.splice(action.payload, 1);
    },
    editEmployee: (state, action) => {
      const editedEmployee = action.payload;
      return employeeList.map((e) =>
        e.id === editedEmployee.id
          ? {
              ...e,
              name: editedEmployee.name,
              age: editedEmployee.age,
              gender: editedEmployee.gender,
              position: editedEmployee.position,
              company: editedEmployee.company,
            }
          : e
      );
    },
  },
});

export const {
  setEmployees,
  resetEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
