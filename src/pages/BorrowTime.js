import React from "react";
const firebase = require("firebase");

class BorrowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD8D423kx8cOCiGiLOTx-L1i5INEoFYAcI",
      authDomain: "pacific-plating-262123.firebaseapp.com",
      projectId: "pacific-plating-262123"
    });

    firebase
      .auth()
      .signInWithEmailAndPassword("tayloraj10@gmail.com", "kipper100")
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    let db = firebase.firestore();
  }

  render() {
    return (
      <div className="borrowTime">
        <h1>This is the borrow time page</h1>
      </div>
    );
  }
}

export default BorrowTime;
