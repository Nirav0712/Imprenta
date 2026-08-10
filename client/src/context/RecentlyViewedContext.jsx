import { createContext, useContext, useEffect, useState } from "react";

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentProducts")) || [];
    setRecentProducts(stored);
  }, []);

  const addRecentlyViewed = (product) => {
    setRecentProducts((prev) => {
      const filtered = prev.filter((item) => item.id !== product.id);

      const updated = [product, ...filtered].slice(0, 8);

      localStorage.setItem(
        "recentProducts",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  return (
    <RecentlyViewedContext.Provider
      value={{
        recentProducts,
        addRecentlyViewed,
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewedContext = () =>
  useContext(RecentlyViewedContext);