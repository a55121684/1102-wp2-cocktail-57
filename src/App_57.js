import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home_57";
import About from "./pages/About_57";
import SingleCocktail from "./pages/SingleCocktail_57";
import Error from "./pages/Error_57";
// import components
import Navbar from "./components/Navbar_57";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
