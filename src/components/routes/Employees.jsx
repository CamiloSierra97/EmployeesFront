import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import EmployeeCard from "../employees/EmployeeCard";

const Employees = () => {
  const [employees, setEmployees] = useState();
  const [pagination, setPagination] = useState();
  const [allEmployees, setAllEmployees] = useState();
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  const prevPage = () => {
    axios
      .get(pagination.previous, getConfig())
      .then((res) => {
        setEmployees(res.data.results);
        setPagination(res.data);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    axios
      .get(pagination.next, getConfig())
      .then((res) => {
        setEmployees(res.data.results);
        setPagination(res.data);
      })
      .catch((err) => console.log(err));
  };

  const numberTyping = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://localhost:44330/api/Employees", getConfig())
      .then((res) => {
        setEmployees(res.data);
        //    setPagination(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://localhost:44330/api/Employees", getConfig())
      .then((res) => setAllEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilter(
      allEmployees?.filter((element) => element.DocumentNumber.includes(search))
    );
  }, [search]);

  return (
    <>
      <div className="form__continer">
        <form>
          <input
            type="text"
            placeholder="Identificacion Number"
            onChange={numberTyping}
          />
        </form>
        <div className="button__container">
          <button className="prev" onClick={prevPage}>
            PrevPage
          </button>
          <button className="next" onClick={nextPage}>
            NextPage
          </button>
        </div>
        <div className="button__container">
          <NavLink to="/create_employee">
            <button>Create Employee</button>
          </NavLink>
        </div>
      </div>
      <div className="employee__card">
        <div className="employee__card-div">
          {filter
            ? filter?.data.map((employee) => (
                <EmployeeCard
                  key={employee.EmployeeId}
                  employee={employee}
                  setEmployees={setEmployees}
                  setPagination={setPagination}
                />
              ))
            : employees?.data.map((employee) => (
                <EmployeeCard
                  key={employee.EmployeeId}
                  employee={employee}
                  setEmployees={setEmployees}
                  setPagination={setPagination}
                />
              ))}
        </div>
      </div>
      <div className="button__container">
        <button className="prev" onClick={prevPage}>
          PrevPage
        </button>
        <button className="next" onClick={nextPage}>
          NextPage
        </button>
      </div>
    </>
  );
};

export default Employees;
