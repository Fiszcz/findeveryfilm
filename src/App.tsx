import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { FilmDetails } from "./pages/FilmDetails/FilmDetails";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import "./App.less";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

const queryClient = new QueryClient();

export enum ROUTES {
  SEARCH = "/search",
  FILM = "/film/:id",
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Switch>
            <Route path={ROUTES.SEARCH} component={SearchPage} exact={true} />
            <Route path={ROUTES.FILM} component={FilmDetails} exact={true} />
            <Redirect to={ROUTES.SEARCH} />
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
