// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./pages/Homepage/About.jsx";
import Candidate from "./pages/Candidate.jsx";
import Employer from "./pages/Employer/Employer.jsx";
import EmployerDashboard from "./pages/Dashboard/EmployerDashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import auth from "./utils/auth";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/candidate",
        element: <Candidate />,
      },
      {
        path: "/employer",
        element: <Employer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/company/dashboard",
        element: <EmployerDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Footer />
  </>
);
