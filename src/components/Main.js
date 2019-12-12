import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainDirect from "../components/MainDirect";
// import '../styles/main.css'

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <MainDirect />
        <Footer />
      </div>
    );
  }
}

export default Main;
