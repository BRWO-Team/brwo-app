import React from "react";
import AddFormControl from "../components/AddFormControl";
import AddFormModal from "../components/AddFormModal"

class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <AddFormControl />
        <AddFormModal />
      </div>
    );
  }
}

export default Add;
