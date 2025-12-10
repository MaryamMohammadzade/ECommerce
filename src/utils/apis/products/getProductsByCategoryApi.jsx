import apiClient from "../../../constants/axios-interceptor";

export const getProductsByCategoryApi = async (id) => {
  try {
    return await apiClient.get(`/products/?categoryId=${id}`);
  } catch (error) {
    return error;
  }
};

export default getProductsByCategoryApi;
