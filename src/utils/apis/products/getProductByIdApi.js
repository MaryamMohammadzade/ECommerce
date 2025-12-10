import apiClient from "../../../constants/axios-interceptor";

export const getProductByIdApi = async (id) => {
  try {
    return await apiClient.get(`/products/${id}`);
  } catch (error) {
    return error;
  }
};

export default getProductByIdApi;
