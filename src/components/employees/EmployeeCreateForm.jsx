import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getConfig from "../../utils/getConfig";
import { useNavigate } from "react-router-dom";

const EmployeeCreateForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const [countries, setCountries] = useState();
  const [areas, setAreas] = useState();
  const [subareas, setSubAreas] = useState();
  const [selectedArea, setSelectedArea] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    axios
      .get("https://localhost:44330/api/Countries", getConfig())
      .then((res) => setCountries(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get("https://localhost:44330/api/Areas", getConfig())
      .then((res) => {
        setAreas(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://localhost:44330/api/Subareas", getConfig())
      .then((res) => setSubAreas(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (data) => {
    const submit = {
      ...data,
      CountryId: parseInt(selectedCountry),
      SubAreaId: parseInt(selectedArea),
    };
    const URL = "https://localhost:44330/api/Employees";
    console.log(submit);
    axios
      .post(URL, submit, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/");
    reset({});
  };

  const selectedAreaFn = () => {
    setSelectedArea(document.getElementById("Areas").value);
  };

  const selectedCountryFn = () => {
    setSelectedCountry(document.getElementById("Country").value);
  };

  return (
    <div className="edit__container">
      <article className="edit__article">
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
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Surname">
              Surname
            </label>
            <input
              {...register("Surname")}
              className="login__input"
              type="text"
              id="Surname"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Phone">
              Phone
            </label>
            <input
              {...register("Phone", {
                setValueAs: (value) => parseInt(value),
              })}
              className="login__input"
              type="text"
              id="Phone"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="DateOfHire">
              Date Of Hire
            </label>
            <input
              {...register("DateOfHire")}
              className="login__input"
              type="text"
              id="DateOfHire"
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
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Country">
              Country
            </label>
            <select name="countries" id="Country" onChange={selectedCountryFn}>
              {countries?.map((country) => (
                <option value={country.CountryId} key={country.CountryId}>
                  {country.CountryName}
                </option>
              ))}
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Area">
              Area
            </label>
            <select name="areas" id="Areas" onChange={selectedAreaFn}>
              {areas?.map((area) => (
                <option value={area.AreaId} key={area.AreaId}>
                  {area.AreaName}
                </option>
              ))}
            </select>
          </div>
          <div className="edit__div">
            <label
              className="login__label"
              htmlFor="
            Subarea"
            >
              Subarea
            </label>
            <select name="subareas" id="Subareas">
              {subareas
                ?.filter((subarea) => subarea.AreaId == selectedArea)
                .map((subarea) => (
                  <option value={subarea.AreaId} key={subarea.SubareaId}>
                    {subarea.SubareaName}
                  </option>
                ))}
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="DocumentType">
              Document Type
            </label>
            <select
              name="DocumenType"
              id="DocumenType"
              {...register("DocumentType")}
            >
              <option value="C.C">C.C</option>
              <option value="P.E">C.E</option>
              <option value="PEP">PEP</option>
              <option value="Passport">Passport</option>
              <option value="Drivers License">Drivers License</option>
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="DocumentNumber">
              Document Number
            </label>
            <input
              name="DocumentNumber"
              id="DocumentNumber"
              {...register("DocumentNumber", {
                setValueAs: (value) => parseInt(value),
              })}
            ></input>
          </div>
          <div
            className="edit__div"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button style={{ width: "8em" }}>Create</button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default EmployeeCreateForm;
