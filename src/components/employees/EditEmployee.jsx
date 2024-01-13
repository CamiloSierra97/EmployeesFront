import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import Loader from "../loader/Loader";
import EmployeeForm from "./EmployeeForm";

const EditEmployee = () => {
  const [thisEmployee, setThisEmployee] = useState();
  const [isloading, setIsloading] = useState(false);
  const parameter = useParams();
  const URL = `https://employees-service-hnlj.onrender.com/api/v1/employees/${parameter.id}`;

  useEffect(() => {
    axios
      .get(URL, getConfig())
      .then((res) => setThisEmployee(res.data))
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
