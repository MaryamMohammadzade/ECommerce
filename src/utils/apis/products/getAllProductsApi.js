import apiClient from "../../../constants/axios-interceptor";

export const getAllProductsApi = async ({ title, price_min, price_max }) => {
  try {
    const query = new URLSearchParams();

    if (title) query.set("title", title);
    if (price_min) query.set("price_min", price_min);
    if (price_max) query.set("price_max", price_max);

    const url = `/products?${query.toString()}`;
    console.log("Final URL:", url);

    return await apiClient.get(url);
  } catch (error) {
    return error;
  }
};

export default getAllProductsApi;
