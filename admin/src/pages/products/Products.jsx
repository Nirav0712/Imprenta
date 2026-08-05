import { useState } from "react";

import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";

const Products = () => {

  // Search State

  const [search, setSearch] = useState("");

  // Category Filter

  const [category, setCategory] = useState("All");

  // Status Filter

  const [status, setStatus] = useState("All");

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-black text-white">
            Products
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all website products from one place.
          </p>

        </div>

      </div>

      {/* Toolbar */}

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />

      {/* Product Table */}

      <ProductTable
        search={search}
        category={category}
        status={status}
      />

    </div>
  );
};

export default Products;