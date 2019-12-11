import React from "react";
import Header from "../components/Header";
import MainDirect from "../components/MainDirect";
// import '../styles/main.css'

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <MainDirect />
      </div>
    );
  }
}

export default Main;
