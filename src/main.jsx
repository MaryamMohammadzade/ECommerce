import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "./providers";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import {Router} from "./constants/Router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={Router} />
    </Providers>
  </StrictMode>
);
