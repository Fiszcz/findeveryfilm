import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { FilmDetailsPage } from "./pages/FilmDetails/FilmDetailsPage";
import { ActorDetailsPage } from "./pages/ActorDetails/ActorDetailsPage";
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
  ACTOR = "/actor/:name",
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Switch>
            <Route path={ROUTES.SEARCH} component={SearchPage} exact={true} />
            <Route
              path={ROUTES.FILM}
              component={FilmDetailsPage}
              exact={true}
            />
            <Route
              path={ROUTES.ACTOR}
              component={ActorDetailsPage}
              exact={true}
            />
            <Redirect to={ROUTES.SEARCH} />
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
