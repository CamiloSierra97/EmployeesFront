import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const EmployeeCard = ({ employee }) => {


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
            <NavLink to="/create_employee">
              <button>Edit Employee</button>
            </NavLink>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default EmployeeCard;
