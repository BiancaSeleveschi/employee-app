import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmployeeList } from "../components/EmployeeList";
import { setEmployees,resetEmployees } from "../redux/EmployeeReducer";

export const Home = () => {
  const employeeList = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleShowBEEmployees = () => {
    dispatch(setEmployees("BE"));
  };

  const handleShowFEEmployees = () => {
    dispatch(setEmployees("FE"));
  };
  const handleResetEmployees = () => {
    dispatch(resetEmployees());
  };
  return (
    <div>
      <h2 className="text-center p-5">Employees by category:</h2>
      <div className="d-flex m-auto">
        <button
          onClick={handleShowBEEmployees}
          className="m-auto w-25 btn btn-primary"
        >
          Backend
        </button>
        <button
          onClick={handleShowFEEmployees}
          className="m-auto w-25 btn btn-success"
        >
          Frontend
        </button>
      </div>
      <h3 className="pt-5 text-center pb-3">See the complete list:</h3>
      <button onClick={handleResetEmployees} className=" m-auto d-flex btn btn-dark mb-5">Complete list</button>

      <EmployeeList employeeList={employeeList} />
    </div>
  );
};
