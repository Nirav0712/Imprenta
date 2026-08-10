import axiosInstance from "../config/axios";

export const uploadApi = {
  uploadImage: async (formData) => {
    const { data } = await axiosInstance.post(
      "/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  },
};