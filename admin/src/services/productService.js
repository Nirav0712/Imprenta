import { productApi } from "../api/productApi";

export const productService = {

  getProducts() {
    return productApi.getAll();
  },

  getProduct(id) {
    return productApi.getById(id);
  },

  createProduct(data) {
    return productApi.create(data);
  },

  updateProduct(id, data) {
    return productApi.update(id, data);
  },

  deleteProduct(id) {
    return productApi.delete(id);
  },

};