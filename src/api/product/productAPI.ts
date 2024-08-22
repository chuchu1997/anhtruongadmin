import axiosInstance from "../../axios";

const ProductAPI = {
  getAllProducts: async () => {
    return await axiosInstance({
      method: "GET",
      url: "/product",
    });
  },
};
export { ProductAPI };
