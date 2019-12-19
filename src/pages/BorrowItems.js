import React from "react";
import ItemsList from "../components/ItemsList";
const firebase = require("firebase");
// const admin = require("firebase-admin");

class BorrowItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      colors: [],
      categories: [],
      titles: [],
      images: []
    };
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
      //.where("category", "==", 'tool')
      .limit(6)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let color;
          switch (doc.data().category) {
            case "tool":
              color = "bg-primary";
              break;
            case "book":
              color = "bg-primary-2";
              break;
            case "sports":
              color = "bg-primary-3";
              break;
            default:
              color = "bg-blank";
          }
          let category;
          switch (doc.data().category) {
            case "tool":
              category = "Blue";
              break;
            case "book":
              category = "Red";
              break;
            case "sports":
              category = "Green";
              break;
            default:
              category = "";
          }
          this.setState({ data: this.state.data.concat(doc.data()) });
          this.setState({ titles: this.state.titles.concat(doc.data().title) });
          this.setState({
            images: this.state.images.concat(doc.data().images[0])
          });
          this.setState({ colors: this.state.colors.concat(color) });
          this.setState({ categories: this.state.categories.concat(category) });
          // console.log(this.state);
        });
      });
  }

  render() {
    return (
      <div className="borrowItems">
        <ItemsList
          data={this.state.data}
          colors={this.state.colors.reverse()}
          categories={this.state.categories.reverse()}
          titles={this.state.titles}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default BorrowItems;
