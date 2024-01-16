import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const EmployeeCard = ({ employee }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit_employee", { state: { employeeData: employee } });
  };

  const handleDelete = () => {
    axios
      .patch(
        "https://localhost:44330/api/Employees",
        { EmployeeId: employee.EmployeeId },
        getConfig()
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="employee__card-container">
      <article className="employee__card-article">
        <ul className="employee__card-list">
          <li className="employee__card-items">
            <p>Full Name</p>
            {employee?.FirstName} {employee?.Surname}
          </li>
          <li className="employee__card-items">
            <p>Number</p>
            {employee?.Phone}
          </li>
          <li className="employee__card-items">
            <p>Date of Hire</p> {employee?.DateOfHire}
          </li>
          <li className="employee__card-items">{employee?.DocumentType}</li>
          <li className="employee__card-items">{employee?.DocumentNumber}</li>
          <li className="employee__card-items">
            <p>Email:</p>
            {employee?.Email ? employee.Email : "no data"}
          </li>
          <li className="employee__card-items">{employee?.Country}</li>
          <li className="employee__card-items">
            <p>Status</p>
            Active
          </li>
          <li className="employee__card-items">
            <button onClick={handleEdit}>Edit Employee</button>
          </li>
          <li className="employee__card-items">
            <button onClick={handleDelete}>Delete Employee</button>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default EmployeeCard;
