/* Page Base Layout - Consists of Navbar, and Child Containers */
import React from "react";
import Navbar from "components/Navbar";

class Layout extends React.Component {
  render() {
    return (
      <div
        className="container mt-md-3"
        style={{ backgroundColor: "rgb(246,246,246)" }}
      >
        <Navbar></Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
