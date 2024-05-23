import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, action } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";

import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <p>Oh no!</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <BlogPost />,
      },
      {
        path: "contact",
        element: <Contact />,
        action,
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
