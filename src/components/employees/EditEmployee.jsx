import axios from "axios";
import React, { useEffect, useState } from "react";
import getConfig from "../../utils/getConfig";
import Loader from "../loader/Loader";
import EmployeeForm from "./EmployeeForm";

const EditEmployee = () => {
  const [thisEmployee, setThisEmployee] = useState();
  const [isloading, setIsloading] = useState(false);
  const URL = `https://localhost:44330/api/Employees`;

  useEffect(() => {
    axios
      .get(URL, getConfig())
      .then((res) => setThisEmployee(res.data), console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="edit__container">
      {isloading ? (
        <Loader />
      ) : (
        <EmployeeForm
          info={thisEmployee}
          setIsloading={setIsloading}
          URL={URL}
        />
      )}
    </div>
  );
};

export default EditEmployee;
