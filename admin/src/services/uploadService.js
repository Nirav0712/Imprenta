import { uploadApi } from "../api/uploadApi";

export const uploadService = {
  uploadImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return uploadApi.uploadImage(formData);
  },
};