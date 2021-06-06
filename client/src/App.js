import React from "react";
import MatchList from "./components/Match/MatchList";
import Teams from "./components/Teams/Teams";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import SingleMatch from "./components/Match/SingleMatch";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={MatchList} />
        <Route path="/match/:id" exact component={SingleMatch} />
        <Route path="/auth" component={Auth} />
        <Route path="/teams" component={Teams} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
