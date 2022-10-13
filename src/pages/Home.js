import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { Form } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = { value: "Canada" };
    this.state = {
      languages: [],
    };
  }
  componentDidMount() {}
  emailValidator(e) {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      e.target.className = "form-control ";
    } else {
      e.target.className = "form-control is-invalid";
    }
  }
  render() {
    return (
      <div className="container p-5">
        <div className="row shadow-lg p-5">
          <h2 className="fw-bold mt-5">Aromatic Bar </h2>
          <p className=" my-3 text-center text-secondary fw-bold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
            amet{" "}
          </p>
          <div className="row justify-content-center my-4">
            <div className="col-5">
              <label for="InputEmail2" className="form-label">
                Customer Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control is-invalid"
                placeholder="First name"
                id="InputEmail1"
                aria-label="First name"
                onChange={this.emailValidator}
              />
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                Please enter the value for the above field.
              </div>
            </div>
            <div className="col-5">
              <label for="InputEmail2" className="form-label">
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control is-invalid"
                placeholder="Last name"
                id="InputEmail2"
                aria-label="Last name"
                onChange={this.emailValidator}
              />

              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                Please enter the value for the above field.
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-8">
            <div className="col-3">
              <label for="InputEmail2" className="form-label">
                Phone Number<span style={{ color: "red" }}>*</span>
              </label>
              <div className="d-flex justify-content-between">
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={{ width: "100px", height: "35px" }}
                  className="form-control"
                >
                  <option value="Canada">
                    {" "}
                    {"\uD83C\uDDE8\uD83C\uDDE6"} Canada
                  </option>
                  <option value="United States">
                    {"\uD83C\uDDFA\uD83C\uDDF8"} United States
                  </option>
                </select>
                <div className="col-12 my-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    id="InputEmail2"
                    aria-label="Last name"
                    onChange={this.emailValidator}
                  />
                </div>
              </div>
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                Please enter the value for the above field.
              </div>
            </div>
            <div className="col-7 "></div>
            <div class="row ">
              <div className="col-7">
                <label for="InputEmail2" className="form-label">
                  Please rate the quality of the service you received from your
                  host<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
          </div>

          <div class="row"></div>
          <div className="col-5">
            <button className="btn btn-primary"> submit </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
