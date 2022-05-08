import React from "react";
import { Container } from "@material-ui/core";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => (
  <HashRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Container>
  </HashRouter>
);

export default App;
