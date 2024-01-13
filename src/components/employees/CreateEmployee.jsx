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
      .get(
        "https://employees-service-hnlj.onrender.com/api/v1/areas",
        getConfig()
      )
      .then((res) => setAreas(res.data))
      .catch((err) => console.log(err));

    axios
      .get(
        "https://employees-service-hnlj.onrender.com/api/v1/subareas",
        getConfig()
      )
      .then(
        (res) => setSubAreas(res.data),
        setSubareaFilter(
          subareas?.filter((element) =>
            element.area.name.includes(selectedArea)
          )
        )
      )
      .catch((err) => console.log(err));
  }, [selectedArea]);

  const submit = (data) => {
    const URL =
      "https://employees-service-hnlj.onrender.com/api/v1/employees/my_employees/";
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
              Birthday
            </label>
            <input
              {...register("birthday")}
              className="login__input"
              type="date"
              id="birthday"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="gender">
              Gender
            </label>
            <input
              {...register("gender")}
              className="login__input"
              type="text"
              id="gender"
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
                <option value={area.id} key={area.id} {...register("areaId")}>
                  {area.name}
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
                    <option value={subarea.name} key={subarea.id}>
                      {subarea.name}
                    </option>
                  ))
                : subareas?.map((subarea) => (
                    <option
                      value={subarea.id}
                      key={subarea.id}
                      {...register("subareaId")}
                    >
                      {subarea.name}
                    </option>
                  ))}
            </select>
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="identificationCardType">
              Identification Card Type
            </label>
            <input
              {...register("identificationCardType")}
              className="login__input"
              type="text"
              id="identificationCardType"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="identificationCardNumber">
              Identification Card Number
            </label>
            <input
              {...register("identificationCardNumber")}
              className="login__input"
              type="number"
              id="identificationCardNumber"
            />
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
