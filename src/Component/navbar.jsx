import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log("NavBar Rendered");
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid " style={{ fontSize: 40 }}>
          Counter App
        </div>

        <span
          className="bg m-4 rounded-pill bg-info"
          style={{ fontStyle: "italic" }}
        >
          Total Counter = {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default Navbar;
