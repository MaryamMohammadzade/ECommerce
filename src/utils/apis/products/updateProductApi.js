import apiClient from "../../../constants/axios-interceptor";

export const updateProduct = async (id, data) => {
  try {
    return await apiClient.put(`/products/${id}`, data);
  } catch (error) {
    return error;
  }
};

export default updateProduct;
