import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <p>Oh no!</p>,
    children: [
      {
        index: true,
        element: <h2>Welcome to My Site</h2>,
      },
      {
        path: "about",
        element: <h2>About Me</h2>,
      },
      {
        path: "blog",
        element: <h2>Blog</h2>,
      },
      {
        path: "blog/:slug",
        element: <h2>Blog Post</h2>,
      },
      {
        path: "contact",
        element: <h2>Contact Me</h2>,
      },
    ],
  },
]);

const skip = document.querySelector('[href="#main"]');
const main = document.getElementById("main");
if (skip && main) {
  skip.addEventListener("click", (event) => {
    event.preventDefault();
    main.setAttribute("tabindex", "-1");
    main.focus();
    main.removeAttribute("tabindex");
  });
}

ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
