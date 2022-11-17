import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "@pages/Router";

const queryClient = new QueryClient();
const root = document.getElementById("root");

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(root).render(<App />);
