import { useEffect, useState } from "react";
import { productService } from "../services/productService";

const useProducts = () => {

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {

    const data = await productService.getProducts();

    setProducts(data);

  };

  useEffect(() => {

    loadProducts();

  }, []);

  return {

    products,

    reload: loadProducts,

  };

};

export default useProducts;