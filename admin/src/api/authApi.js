import axiosInstance from "../config/axios";

export const authApi = {
  login: async (credentials) => {
    const { data } = await axiosInstance.post(
      "/auth/login",
      credentials
    );

    return data;
  },

  register: async (user) => {
    const { data } = await axiosInstance.post(
      "/auth/register",
      user
    );

    return data;
  },

  profile: async () => {
    const { data } = await axiosInstance.get(
      "/auth/profile"
    );

    return data;
  },
};