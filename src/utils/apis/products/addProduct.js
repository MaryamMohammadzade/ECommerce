import apiClient from "../../../constants/axios-interceptor";

export const addProduct = async (data) => {
  try {
    return await apiClient.post("/products/", data);
  } catch (error) {
    return error;
  }
};

export default addProduct;
