import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
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

        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Redirect */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Protected */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/add"
            element={<AddProduct />}
          />

          <Route
            path="/products/edit/:id"
            element={<EditProduct />}
          />

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