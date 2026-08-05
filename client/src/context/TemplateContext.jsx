import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

import templatesData from "../data/templatesData";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {

  /* Search */

  const [search, setSearch] = useState("");

  /* Category */

  const [categories, setCategories] = useState([]);

  /* Sort */

  const [sort, setSort] = useState("latest");

  /* Grid / List View */

  const [view, setView] = useState("grid");

  /* Pagination */

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  /* Reset Page */

  useEffect(() => {
    setCurrentPage(1);
  }, [search, categories, sort]);

  /* Force Grid View on Mobile */

useEffect(() => {

  const handleResize = () => {

    if (window.innerWidth < 1024) {

      setView("grid");

    }

  };

  // Initial Check
  handleResize();

  // Listen for resize
  window.addEventListener("resize", handleResize);

  return () => {

    window.removeEventListener("resize", handleResize);

  };

}, []);

  /* Dynamic Categories */

  const categoryList = useMemo(() => {

    return [...new Set(

      templatesData.map((item) => item.category)

    )];

  }, []);

  /* Filter + Sort */

  const filteredTemplates = useMemo(() => {

    let data = [...templatesData];

    /* Search */

    if (search.trim()) {

      data = data.filter((item) =>
        item.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    }

    /* Category */

    if (categories.length > 0) {

      data = data.filter((item) =>
        categories.includes(item.category)
      );

    }

    /* Sorting */

    switch (sort) {

      case "price-low":

        data.sort(
          (a, b) =>
            Number(a.price.replace(/[^\d]/g, "")) -
            Number(b.price.replace(/[^\d]/g, ""))
        );

        break;

      case "price-high":

        data.sort(
          (a, b) =>
            Number(b.price.replace(/[^\d]/g, "")) -
            Number(a.price.replace(/[^\d]/g, ""))
        );

        break;

      case "rating":

        data.sort((a, b) => b.rating - a.rating);

        break;

      default:
        break;
    }

    return data;

  }, [search, categories, sort]);

  /* Pagination */

  const totalPages = Math.ceil(
    filteredTemplates.length / itemsPerPage
  );

  const paginatedTemplates = useMemo(() => {

    const start = (currentPage - 1) * itemsPerPage;

    return filteredTemplates.slice(
      start,
      start + itemsPerPage
    );

  }, [filteredTemplates, currentPage]);

  /* Clear All */

  const clearFilters = () => {

    setSearch("");

    setCategories([]);

    setSort("latest");

    setCurrentPage(1);

  };

  return (

    <TemplateContext.Provider
      value={{

        templates: templatesData,

        filteredTemplates,

        paginatedTemplates,

        totalPages,

        currentPage,
        setCurrentPage,

        itemsPerPage,

        search,
        setSearch,

        categories,
        setCategories,

        categoryList,

        sort,
        setSort,

        view,
        setView,

        clearFilters,

      }}
    >

      {children}

    </TemplateContext.Provider>

  );

};

export const useTemplates = () =>
  useContext(TemplateContext);