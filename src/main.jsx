import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

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
    <App />
  </React.StrictMode>
);
