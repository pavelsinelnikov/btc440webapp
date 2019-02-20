import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main id="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
