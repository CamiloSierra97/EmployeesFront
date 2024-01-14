import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const EmployeeForm = ({ info, setIsloading, URL }) => {
  const { handleSubmit, register, reset } = useForm();
  const [succesfull, setSuccesfull] = useState(false);


  const submit = (data) => {
    setIsloading(true);
    axios
      .patch(URL, data, getConfig())
      .then((res) => setSuccesfull(res.data), setIsloading(false))
      .catch((err) => console.log(err));
    reset({});
  };

  useEffect(() => {
  console.log(info)
  }, [input])

  return (
    <article className="edit__article">
      {succesfull ? (
        <div className="edit__article-div">
          <div className="edit__article-div">
            Employee with Id number {info.DocumentNumber} edited
            succesfully
          </div>
          <NavLink to={"/"}>
            <button>Go to home</button>
          </NavLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submit)} className="edit__form">
          <div className="edit__div">
            <label className="login__label" htmlFor="FirstName">
              First Name
            </label>
            <input
              {...register("FirstName")}
              className="login__input"
              type="text"
              id="FirstName"
              defaultValue={info?.FirstName}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Surname">
              Last Name
            </label>
            <input
              {...register("Surname")}
              className="login__input"
              type="text"
              id="Surname"
              defaultValue={info?.Surname}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Phone">
              Phone
            </label>
            <input
              {...register("Phone-")}
              className="login__input"
              type="text"
              id="Phone"
              defaultValue={info?.Phone}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="DateOfHire">
              DateOfHire
            </label>
            <input
              {...register("DateOfHire")}
              className="login__input"
              type="date"
              id="DateOfHire"
              defaultValue={info?.DateOfHire}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Email">
              Email
            </label>
            <input
              {...register("Email")}
              className="login__input"
              type="text"
              id="Email"
              defaultValue={info?.Email}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Country">
              Country
            </label>
            <input
              {...register("Country")}
              className="login__input"
              type="text"
              id="Country"
              defaultValue={info?.Country}
            />
          </div>
          <button>Update</button>
        </form>
      )}
    </article>
  );
};

export default EmployeeForm;
