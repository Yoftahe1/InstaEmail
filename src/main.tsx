import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeConfig from "./theme.tsx";
import Landing from "./pages/landing/landing.tsx";
import Dashboard from "./pages/dashboard/dashboard.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/*",
    element: <Landing />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeConfig>
      <RouterProvider router={router} />
    </ThemeConfig>
  </StrictMode>
);
