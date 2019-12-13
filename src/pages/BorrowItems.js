import React from "react";
import ItemsList from '../components/ItemsList'

class BorrowItems extends React.Component {
  render() {
    return (
      <div className="borrowItems">
        <h1>Hi, this is a test page for borrowing items</h1>
        <ItemsList />
      </div>
    );
  }
}

export default BorrowItems;
