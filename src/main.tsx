import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* sonner toast added  */}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            className:
              "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
            style: {
              borderRadius: "8px",
              fontSize: "14px",
            },
          }}
        />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
