import axiosInstance from "../../axios";
import { CreateProductInterface } from "../../interfaces/product";

const ProductAPI = {
  getAllProducts: async () => {
    return await axiosInstance({
      method: "GET",
      url: "/product",
    });
  },

  createNewProduct: async (createProductData: CreateProductInterface, ss?: string) => {
    return await axiosInstance({
      method: "POST",
      url: "/product",
      // data:
    });
  },
};
export { ProductAPI };
