import React from "react";
import ReactDOM from "react-dom/client";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const queryClient = new QueryClient();

const theme = extendTheme({});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
