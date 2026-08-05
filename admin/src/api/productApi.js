// Backend API Placeholder

const BASE_URL = "http://localhost:5000/api/products";

export const productApi = {

  getAll: async () => {

    console.log("GET", BASE_URL);

    return [];

  },

  getById: async (id) => {

    console.log("GET", `${BASE_URL}/${id}`);

    return null;

  },

  create: async (data) => {

    console.log("POST", data);

    return data;

  },

  update: async (id, data) => {

    console.log("PUT", id, data);

    return data;

  },

  delete: async (id) => {

    console.log("DELETE", id);

    return true;

  },

};