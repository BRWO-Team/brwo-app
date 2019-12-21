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
        <div className="card">
          <a href="#">
            <img src={this.props.image} alt="Image" className="card-img-top" />
          </a>
          <div
            className="card-body d-flex flex-column bg-blank"
            style={{ marginTop: "5px" }}
          >
            <div className="d-flex justify-content-between mb-3">
              <div className="text-small d-flex">
                <div className="mr-2">
                  <a href="#" style={{ color: this.props.category }}>
                    {this.props.category}
                  </a>
                </div>
                {/* <span className="text-muted">14 June</span> */}
              </div>
            </div>
            <a href="#">
              <h4>{this.props.title}</h4>
            </a>
            <p className="flex-grow-1">{this.props.description}</p>
            <div className="d-flex align-items-center mt-3">
              <div className="ml-1">
                <span className="text-small text-muted">By </span>
                <span className="text-small">Username</span>
                {/* <span className="badge bg-primary-alt text-primary float-right">
                <img
                  className="icon icon-sm"
                  src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
                  alt="heart interface icon"
                  data-inject-svg
                />
                0
              </span> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={"card shadow-3d min-vh-30 " + this.props.color}>
          <img className={"item-image"} src={this.props.image}></img>
          <h1 className={"display-4 item-title"} style={{ color: "white" }}>
            {this.props.title}
          </h1>
        </div> */}
      </div>
    );
  }
}

export default Item;
