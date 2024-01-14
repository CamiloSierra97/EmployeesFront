import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import getConfig from "../../utils/getConfig";

const CreateEmployee = () => {
  const { handleSubmit, register, reset } = useForm();
  const [areas, setAreas] = useState();
  const [subareas, setSubAreas] = useState();
  const [selectedArea, setSelectedArea] = useState("Finances");
  const [subareaFilter, setSubareaFilter] = useState();

  useEffect(() => {
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
  }, [selectedArea]);

  const submit = (data) => {
    const URL = "https://localhost:44330/api/Employees";
    axios
      .post(URL, data, getConfig())
      .then((res) => console.log(res))
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
            <label className="login__label" htmlFor="firstName">
              First Name
            </label>
            <input
              {...register("firstName")}
              className="login__input"
              type="text"
              id="firstName"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="lastName">
              Last Name
            </label>
            <input
              {...register("lastName")}
              className="login__input"
              type="text"
              id="lastName"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="phone">
              Phone
            </label>
            <input
              {...register("phone")}
              className="login__input"
              type="text"
              id="phone"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="birthday">
              Date Of Hire
            </label>
            <input
              {...register("birthday")}
              className="login__input"
              type="date"
              id="birthday"
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
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="country">
              Country
            </label>
            <input
              {...register("country")}
              className="login__input"
              type="text"
              id="country"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="address">
              Address
            </label>
            <input
              {...register("address")}
              className="login__input"
              type="text"
              id="address"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="address">
              Area
            </label>
            <select name="areas" id="areas" onChange={selectedOption}>
              {areas?.map((area) => (
                <option
                  value={area.AreaId}
                  key={area.AreaId}
                  {...register("areaId")}
                >
                  {area.AreaName}
                </option>
              ))}
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="address">
              Subarea
            </label>
            <select name="subareas" id="subareas">
              {subareaFilter
                ? subareaFilter?.map((subarea) => (
                    <option
                      value={subarea.SubareaName}
                      key={subarea.Subareaid}
                      {...register("AreaId")}
                    >
                      {subarea.SubareaName}
                    </option>
                  ))
                : subareas?.map((subarea) => (
                    <option
                      value={subarea.SubareaId}
                      key={subarea.SubareaId}
                      {...register("SubareaId")}
                    >
                      {subarea.SubareaName}
                    </option>
                  ))}
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
            ></input>
          </div>
          <div
            className="edit__div"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button style={{ width: "5em" }}>Create</button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default CreateEmployee;
