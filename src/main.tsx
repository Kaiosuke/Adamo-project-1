import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/i18n.ts";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import store from "./redux/index.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/index.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
