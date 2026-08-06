import { authApi } from "../api/authApi";

export const authService = {
  async login(email, password) {
    const data = await authApi.login({
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    return data;
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getProfile() {
    return authApi.profile();
  },
};