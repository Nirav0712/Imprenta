import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";
import { TemplateProvider } from "./context/TemplateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecentlyViewedProvider>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </RecentlyViewedProvider>
  </React.StrictMode>
);