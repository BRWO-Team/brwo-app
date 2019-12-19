import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  // if (colors.length > 1 && colors.length < 6) {
  //   while (colors.length < 6) {
  //     colors.push("bg-blank");
  //   }
  // }

  render() {
    let items = [
      <Item
        color={this.props.colors[0]}
        category={this.props.categories[0]}
        title={this.props.titles[0]}
        image={this.props.images[0]}
      />,
      <Item
        color={this.props.colors[1]}
        category={this.props.categories[1]}
        title={this.props.titles[1]}
        image={this.props.images[1]}
      />,
      <Item
        color={this.props.colors[2]}
        category={this.props.categories[2]}
        title={this.props.titles[2]}
        image={this.props.images[2]}
      />,
    //   <Item
    //     color={this.props.colors[3]}
    //     category={this.props.categories[3]}
    //     title={this.props.titles[3]}
    //     image={this.props.images[3]}
    //   />,
    //   <Item
    //     color={this.props.colors[4]}
    //     category={this.props.categories[4]}
    //     title={this.props.titles[4]}
    //     image={this.props.images[4]}
    //   />,
    //   <Item
    //     color={this.props.colors[5]}
    //     category={this.props.categories[5]}
    //     title={this.props.titles[5]}
    //     image={this.props.images[5]}
    //   />
    ];
    // console.log(items);
    console.log(this.props.data);
    return (
      <div className="itemsList">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <h2>Filtering</h2>
                <div className="row">
                  <div className="col">
                    <ul
                      data-isotope-filters
                      data-isotope-id="example-2"
                      className="nav mb-3"
                    >
                      <li className="nav-item">
                        <a href="#" className="nav-link active" data-filter="*">
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-filter="Blue">
                          Blue
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-filter="Red">
                          Red
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-filter="Green">
                          Green
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="row"
                  data-isotope-collection
                  data-isotope-id="example-2"
                >
                  {/* {this.props.data.map(i => {
                      return <Item color="bg-primary" category="Blue" />;
                    })} */}

                  {items}

                  {/* <div data-isotope-item className="col-4" data-category="Blue">
                    <div className="card shadow-3d bg-primary min-vh-30">
                      <img src="https://cdn1.iconfinder.com/data/icons/education-259/100/education-19-512.png"></img>
                    </div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Blue">
                    <div className="card shadow-3d bg-primary min-vh-10"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Navy">
                    <div className="card shadow-3d bg-primary-3 min-vh-20"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Pink">
                    <div className="card shadow-3d bg-primary-2 min-vh-10"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Blue">
                    <div className="card shadow-3d bg-primary min-vh-10"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Navy">
                    <div className="card shadow-3d bg-primary-3 min-vh-30"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Pink">
                    <div className="card shadow-3d bg-primary-2 min-vh-20"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Navy">
                    <div className="card shadow-3d bg-primary-3 min-vh-20"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ItemsList;
