import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import Home from "./pages/Home";
import BorrowItems from "./pages/BorrowItems";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/borrow-items" component={BorrowItems} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
