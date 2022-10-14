import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class Success extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container p-5">
          <div className="row ">
            <div className="col-7 card-box">
              <span className="tick">
                <i class="bi-check-circle"></i>
              </span>
              <div className="header">
                <h2>Thank you for providing the feedback</h2>
                <h5>We will work towards improving your experience</h5>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Success;
