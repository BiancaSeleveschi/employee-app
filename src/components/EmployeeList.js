import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee, editEmployee } from "../redux/EmployeeReducer";

export const EmployeeList = (props) => {
  const { employeeList } = props;
  const [indexEmployee, setIndexEmployee] = useState(-1);
  const dispatch = useDispatch();
  const [editedName, setEditedName] = useState("");
  const [editedAge, setEditedAge] = useState("");
  const [editedGender, setEditedGender] = useState("");
  const [editedPosition, setEditedPosition] = useState("");
  const [editedCompany, setEditedCompany] = useState("");

  const handleDeleteEmployee = (id) => {
    const index = employeeList.findIndex((employee) => employee.id === id);
    dispatch(deleteEmployee(index));
  };
  const showEditCard = (employee) => {
    const index = employeeList.findIndex((e) => employee.id === e.id);
    setIndexEmployee(indexEmployee !== index ? index : -1);
    setEditedName(employee.name);
    setEditedAge(employee.age);
    setEditedGender(employee.gender);
    setEditedPosition(employee.position);
    setEditedCompany(employee.company);
  };
  const handleEditEmployee = (employee) => {
    let editedEmployee = {
      id: employee.id,
      name: editedName,
      age: editedAge,
      gender: editedGender,
      position: editedPosition,
      company: editedCompany,
    };
    dispatch(editEmployee(editedEmployee));
    setIndexEmployee(-1);
  };
  return (
    <div>
      {employeeList.map((employee, index) => (
        <div
          className="border rounded-3 w-50 m-auto bg-secondary p-5 my-3"
          key={index}
        >
          <svg
            onClick={() => {
              showEditCard(employee);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil float-end"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
          {indexEmployee !== index ? (
            <div>
              <h5>Name: {employee.name}</h5>
              <p>Age: {employee.age}</p>
              <p>Gender: {employee.gender}</p>
              <p>Position: {employee.position}</p>
              <p>Company: {employee.company}</p>

              <button
                className="btn btn-danger float-end"
                onClick={() => {
                  handleDeleteEmployee(employee.id);
                }}
              >
                {" "}
                Delete
              </button>
            </div>
          ) : (
            <div className="mb-5">
              <input
                placeholder="Name"
                value={editedName}
                onChange={(e) => {
                  setEditedName(e.target.value);
                }}
                type="text"
                className="p-1 d-block mt-4 mb-2 w-50"
              />
              <input
                placeholder="Name"
                value={editedAge}
                onChange={(e) => {
                  setEditedAge(e.target.value);
                }}
                type="text"
                className="p-1 d-block my-2 w-50"
              />
              <input
                placeholder="Name"
                value={editedGender}
                onChange={(e) => {
                  setEditedGender(e.target.value);
                }}
                type="text"
                className="p-1 d-block my-2 w-50"
              />
              <input
                placeholder="Name"
                value={editedPosition}
                onChange={(e) => {
                  setEditedPosition(e.target.value);
                }}
                type="text"
                className="p-1 d-block my-2 w-50"
              />
              <input
                placeholder="Name"
                value={editedCompany}
                onChange={(e) => {
                  setEditedCompany(e.target.value);
                }}
                type="text"
                className="p-1 d-block my-2 w-50"
              />
              <button
                onClick={() => {
                  handleEditEmployee(employee);
                }}
                className="btn btn-primary float-end d-flex me-3 mt-3"
              >
                Save
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
