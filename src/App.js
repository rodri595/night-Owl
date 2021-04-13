import React from "react";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
//Utilities
import NRoute from "./components/utilities/NormalRoute";
import LiveMap from "./pages/livemap/LiveMap";
import Archive from "./pages/archive/Archive";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <NRoute path="/notfound" component={NotFound} />
        <NRoute path="/" component={LiveMap} exact />
        <NRoute path="/archive" component={Archive} exact />

        <Redirect to="/notfound" />
      </Switch>
    </Router>
  );
};

export default App;
