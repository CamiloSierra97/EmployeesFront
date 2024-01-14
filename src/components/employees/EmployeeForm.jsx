import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import getConfig from "../../utils/getConfig";
import { useLocation } from "react-router-dom";

const CreateEmployee = () => {
  const { handleSubmit, register, reset } = useForm();
  const [countries, setCountries] = useState();
  const [currentCountry, setCurrentCountry] = useState();
  const [areas, setAreas] = useState();
  const [subareas, setSubAreas] = useState();
  // const [subareaFilter, setSubareaFilter] = useState();

  const {
    state: { employeeData },
  } = useLocation();

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
      .then(
        (res) => setSubAreas(res.data.data)
        // setSubareaFilter(
        //   subareas?.data.filter((element) =>
        //     element.area.name.includes(selectedArea)
        //   )
        // )
      )
      .catch((err) => console.log(err));

    axios
      .post(
        "https://localhost:44330/api/Countries",
        { CountryId: employeeData?.CountryId },
        getConfig()
      )
      .then((res) => setCurrentCountry(res.data.data))
      .catch((err) => err);
  }, []);

  const submit = (data) => {
    console.log(data)
    const URL = "https://localhost:44330/api/Employees";
    axios
      .put(URL, data, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    reset({});
  };

  const selectedOption = () => {
    const selectElement = document.getElementById("areas").value;
    setSelectedArea(selectElement);
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
              id="firstName"
              defaultValue={employeeData?.FirstName}
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
              id="lastName"
              defaultValue={employeeData?.Surname}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Phone">
              Phone
            </label>
            <input
              {...register("phone")}
              className="login__input"
              type="text"
              id="phone"
              defaultValue={employeeData?.Phone}
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
              defaultValue={employeeData?.DateOfHire}
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
              id="email"
              defaultValue={employeeData?.Email}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Country">
              Country
            </label>
            <select
              name="countries"
              id="countrie"
              // defaultValue={currentCountry?.CountryName}
            >
              {countries?.map((country) => (
                <option
                  value={country.CountryName}
                  key={country.CountryId}
                  {...register("CountryId")}
                >
                  {country.CountryName}
                </option>
              ))}
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="Area">
              Area
            </label>
            <select name="areas" id="areas" onChange={selectedOption}>
              {areas?.map((area) => (
                <option
                  value={area.AreaId}
                  key={area.AreaId}
                  {...register("AreaId")}
                >
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
            <select name="subareas" id="subareas">
              {
                // subareaFilter
                //   ? subareaFilter?.map((subarea) => (
                //       <option
                //         value={subarea.SubareaName}
                //         key={subarea.Subareaid}
                //         {...register("AreaId")}
                //       >
                //         {subarea.SubareaName}
                //       </option>
                //     ))
                //   :
                subareas?.map((subarea) => (
                  <option
                    value={subarea.SubareaId}
                    key={subarea.SubareaId}
                    {...register("SubareaId")}
                  >
                    {subarea.SubareaName}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="DocumentType">
              Document Type
            </label>
            <select name="DocumenType" id="DocumenType">
              <option value="text" {...register("DocumentType")}>
                C.C
              </option>
              <option value="text" {...register("DocumentType")}>
                C.E
              </option>
              <option value="text" {...register("DocumentType")}>
                PEP
              </option>
              <option value="text" {...register("DocumentType")}>
                Passport
              </option>
              <option value="text" {...register("DocumentType")}>
                Drivers License
              </option>
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="DocumentNumber">
              Document Number
            </label>
            <input
              name="DocumentNumber"
              id="DocumentNumber"
              {...register("DocumentNumber")}
              defaultValue={employeeData?.DocumentNumber}
            ></input>
          </div>
          <div
            className="edit__div"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button style={{ width: "8em" }}>Create or Update</button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default CreateEmployee;
