import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layout extends Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </div>
    )
  }

}
export default Layout