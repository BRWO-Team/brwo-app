import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <div
        data-isotope-item
        className="col-4"
        data-category={this.props.category}
      >
        <div className={"card shadow-3d min-vh-30 " + this.props.color}>
          <img className={"item-image"} src={this.props.image}></img>
          <h1 className={"display-4 item-title"} style={{ color: "white" }}>
            {this.props.title}
          </h1>
        </div>
      </div>
    );
  }
}

export default Item;
