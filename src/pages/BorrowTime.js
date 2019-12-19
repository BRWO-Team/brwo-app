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
        <section>
          <div class="container">
            <div class="row min-vh-70 mb-3">
              <div class="col-4">
                <div class="py-3 hover-shadow-3d bg-primary-alt text-center rounded h-100">
                  <img
                    className={"time-header-image"}
                    src="/assets/img/food-app-6.png"
                  />
                </div>
              </div>
              <div class="col-8 d-flex flex-column">
                <div class="row flex-grow-1">
                  <div class="col-12">
                    <div class="py-3 hover-shadow-3d bg-primary-alt text-center rounded h-100">
                      <img
                        className={"time-header-image"}
                        src="/assets/img/article-1.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-3 flex-grow-1">
                  <div class="col-6">
                    <div class="py-3 hover-shadow-3d bg-primary-alt text-center rounded h-100">
                      <img
                        className={"time-header-image"}
                        src="/assets/img/inner-5.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="py-3 hover-shadow-3d bg-primary-alt text-center rounded h-100">
                      <img
                        className={"time-header-image"}
                        src="/assets/img/article-8.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BorrowTime;
