import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";

import Dashboard from "../pages/dashboard/Dashboard";

import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";
import EditProduct from "../pages/products/EditProduct";
import ViewProduct from "../pages/products/ViewProduct";

import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===========================
            PUBLIC ROUTES
        =========================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ===========================
            PROTECTED ROUTES
        =========================== */}

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard */}

          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* Product List */}

          <Route
            path="/products"
            element={<Products />}
          />

          {/* Add Product */}

          <Route
            path="/products/add"
            element={<AddProduct />}
          />

          {/* Edit Product */}

          <Route
            path="/products/edit/:id"
            element={<EditProduct />}
          />

          {/* View Product */}

          <Route
            path="/products/view/:id"
            element={<ViewProduct />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;