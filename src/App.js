import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import Home from "./pages/Home";
import BorrowItems from "./pages/BorrowItems";
import BorrowTime from "./pages/BorrowTime";
import Add from "./pages/Add"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
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
            <Route path="/borrow-time" component={BorrowTime} />
            <Route path="/add" component={Add} />
            <Route component={Error} />
          </Switch>
          <Footer />
          <a
            href="#"
            className="btn back-to-top btn-primary btn-round"
            data-smooth-scroll
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img
              className="icon"
              src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-29-512.png"
              alt="arrow-up icon"
              data-inject-svg
            />
          </a>
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
