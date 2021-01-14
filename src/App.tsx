import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import "./App.less";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SearchPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
