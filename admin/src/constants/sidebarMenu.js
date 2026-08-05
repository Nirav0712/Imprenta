import {
  FiGrid,
  FiBox,
  FiLayers,
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiMail,
  FiSettings,
  FiFileText,
} from "react-icons/fi";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: FiGrid,
    path: "/",
  },
  {
    title: "Products",
    icon: FiBox,
    path: "/products",
  },
  {
    title: "Categories",
    icon: FiLayers,
    path: "/categories",
  },
  {
    title: "Homepage CMS",
    icon: FiHome,
    path: "/homepage",
  },
  {
    title: "Orders",
    icon: FiShoppingBag,
    path: "/orders",
  },
  {
    title: "Request Sample",
    icon: FiFileText,
    path: "/request-sample",
  },
  {
    title: "Contact",
    icon: FiMail,
    path: "/contact",
  },
  {
    title: "Users",
    icon: FiUsers,
    path: "/users",
  },
  {
    title: "Settings",
    icon: FiSettings,
    path: "/settings",
  },
];