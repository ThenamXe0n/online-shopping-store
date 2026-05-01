import apiEndPoints from "../routes/apiEndPoints";
import axiosInstance from "./axiosInstance";

// async function loginUserApi(payload) {
//   try {
//     const response = await axiosInstance
//   } catch (error) {
//     throw new Error(error.response.data.message || "Login failed");
//   }
// }
async function loginUserApi(payload) {
  try {
    const response = await axiosInstance.post(apiEndPoints.LOGIN, payload);
    return response.data;
  } catch (error) {
    return error.response.data.message || "Login failed";
  }
}
async function registerUserApi(payload) {
  try {
    const response = await axiosInstance.post(apiEndPoints.REGISTER, payload);
    return response.data;
  } catch (error) {
    return error.response.data.message || "Login failed";
  }
}
async function logoutUserApi(payload) {
  try {
    const response = await axiosInstance.post(apiEndPoints.LOGOUT, payload);
    return response.data;
  } catch (error) {
    return error.response.data.message || "Login failed";
  }
}
async function verifyUserLoginApi() {
  try {
    const response = await axiosInstance.get(apiEndPoints.VERIFY_LOGIN);
    return response.data;
  } catch (error) {
    return error.response.data || "Login failed";
  }
}

//create


export { loginUserApi, registerUserApi, logoutUserApi, verifyUserLoginApi };