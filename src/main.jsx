import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import JobDetailPage from "./pages/JobDetailPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import JobListingLayout from "./components/JobListingLayout.jsx";
import JobListingPage from "./pages/JobListingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
