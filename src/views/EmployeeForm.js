import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../redux/EmployeeReducer";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newGender, setNewGender] = useState("");
  const employees = useSelector((state) => state.employees);
  const [showInputAlert, setShowInputAlert] = useState(false);
  const [showAgeAlert, setShowAgeAlert] = useState(false);
  const [showCompanyAlert, setShowCompanyAlert] = useState(false);
  const [showPositionAlert, setShowPositionAlert] = useState(false);
  const [showGenderAlert, setShowGenderAlert] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    let employee = {
      id: employees.length,
      name: newName,
      age: newAge,
      gender: newGender,
      position: newPosition,
      company: newCompany,
    };
    setShowInputAlert(newName === "");
    setShowAgeAlert(newAge === "");
    setShowCompanyAlert(newCompany === "");
    setShowPositionAlert(newPosition === "");
    setShowGenderAlert(newGender === "");
    if (
      newName !== "" &&
      newAge !== "" &&
      newPosition !== "" &&
      newCompany !== "" &&
      newGender !== ""
    ) {
      setShowInputAlert(false);
      setShowAgeAlert(false);
      setShowCompanyAlert(false);
      setShowPositionAlert(false);
      setShowGenderAlert(false);
      dispatch(addEmployee(employee));
      navigate("/");
    }
  };
  return (
    <div>
      <h2 className="text-center p-5">Add employee</h2>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        type="text"
        className="m-auto my-2 d-flex"
        placeholder="Name"
      />
      {showInputAlert && (
        <p className="alert text-danger text-center">Add a name</p>
      )}
      <input
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        type="number"
        className="m-auto my-2 d-flex"
        placeholder="Age"
      />
      {showAgeAlert && (
        <p className="alert text-danger text-center">Add the age</p>
      )}

      <input
        value={newPosition}
        onChange={(e) => setNewPosition(e.target.value)}
        type="text"
        className="m-auto my-2 d-flex"
        placeholder="Position"
      />
      {showPositionAlert && (
        <p className="alert text-danger text-center">Add a position</p>
      )}

      <input
        value={newCompany}
        onChange={(e) => setNewCompany(e.target.value)}
        type="text"
        className="m-auto my-2 d-flex"
        placeholder="Company"
      />
      {showCompanyAlert && (
        <p className="alert text-danger text-center">Add company</p>
      )}

      <select
        className="d-flex m-auto p-1"
        value={newGender}
        onChange={(e) => setNewGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {showGenderAlert && (
        <p className="text-danger text-center">Add gender</p>
      )}

      <button
        onClick={handleAddEmployee}
        className="btn btn-primary m-auto my-4 d-flex"
      >
        Add
      </button>
    </div>
  );
};
