const getConfig = () => ({
  headers: {
    accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    //    Authorization: `JWT ${localStorage.getItem("token")}`,
  },
  data: {},
});

export default getConfig;
