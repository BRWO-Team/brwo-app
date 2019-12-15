import React from "react";
import ItemsList from "../components/ItemsList";
const firebase = require("firebase");
// const admin = require("firebase-admin");

class BorrowItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
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

    db.collection("items")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState({ data: this.state.data.concat(doc.data()) });
          console.log(this.state)
        });
      });
  }

  render() {
    const listItems = this.state.data.map((item) =>
        <li key={item.id}>{item.title}</li> 
    );
    return (
      <div className="borrowItems">
        <ul>
          {listItems}
        </ul>
        <ItemsList />
      </div>
    );
  }
}

export default BorrowItems;
