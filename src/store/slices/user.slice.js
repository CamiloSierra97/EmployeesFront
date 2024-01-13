import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const getUserInfo = () => (dispatch) => {
  const URL = "https://employees-service-hnlj.onrender.com/api/v1/users/me";
  return axios
    .get(URL, getConfig())
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => console.log(err));
};
