import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "~/index.css";
import App from "~/App";

console.log("Content script loaded");

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

createRoot(root).render(
  <StrictMode>
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "280px",
        background: "white",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <App />
    </div>
  </StrictMode>
);
