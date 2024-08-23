import axiosInstance from "../../axios";

export interface userInfoLogin {
  username: string;
  password: string;
}
const AuthAPI = {
  //   getAllProducts: async () => {
  //     return await axiosInstance({
  //       method: "GET",
  //       url: "/product",
  //     });
  //   },

  login: async (userInfo: userInfoLogin) => {
    return await axiosInstance({
      method: "POST",
      url: "/auth/login",
      data: {
        username: userInfo.username,
        password: userInfo.password,
      },
    });
  },
};
export { AuthAPI };
