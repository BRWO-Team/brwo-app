import React from "react";
import { NavLink } from 'react-router-dom';


class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <section className="min-vh-100 bg-primary-2 text-light py-5 o-hidden">
          <div className="container">
            <div className="row text-center py-6">
              <div className="col layer-2">
                <h1 className="display-1 mb-0">404</h1>
                <h2 className="h1">Page not found</h2>
                <div className="lead mb-4">
                  It appears the page you were looking for couldn’t be found.
                </div>
                <a className="btn btn-primary btn-lg" href="/">
                  Go back to home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Error;
