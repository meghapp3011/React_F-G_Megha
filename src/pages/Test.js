import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Canada" };
    this.state = {
      name: "",
      email: "",
      country: "",
      phone: "",
    };
  }
  componentDidMount() {}
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.setState({ name: "", email: "", country: "", phone: "" });
    console.log(this.state)
  };
  // emailValidator(e) {
  //   console.log(e.target.value);
  //   if (e.target.value.length > 0) {
  //     e.target.className = "form-control ";
  //   } else {
  //     e.target.className = "form-control is-invalid";
  //   }
  // }
  render() {
    return (
      <form onSubmit={this.add}>
        <div className="container p-5">
          <div className="row shadow-lg p-5">
            <div className="card-header">
              <h2 className="fw-bold mt-5">Aromatic Bar </h2>
              <p className=" my-3 text-center text-secondary fw-bold ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet{" "}
              </p>
            </div>
            <div className="row justify-content-center my-2">
              <div className="col-7">
                <label for="InputEmail2" className="form-label">
                  Customer Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="First name"
                  name="name"
                  aria-label="First name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                {/* <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                Please enter the value for the above field.
              </div> */}
              </div>
              <div className="col-5">
                <label for="InputEmail2" className="form-label">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Last name"
                  id="email"
                  name="email"
                  aria-label="Last name"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />

                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please enter the value for the above field.
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-7 ">
                <label for="InputEmail2" className="form-label">
                  Phone Number<span style={{ color: "red" }}>*</span>
                </label>
                <div className="d-flex justify-content-between">
                  <div className="select">
                    <select
                      value={this.state.country}
                      onChange={(e) =>
                        this.setState({ country: e.target.value })
                      }
                    >
                      <option value="Canada" name="country">
                        {" "}
                        {"\uD83C\uDDE8\uD83C\uDDE6"} Canada
                      </option>
                      <option name="country" value="United States">
                        {"\uD83C\uDDFA\uD83C\uDDF8"} United States
                      </option>
                    </select>
                  </div>
                  <div className="phone">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      id="phonenum"
                      name="phone"
                      aria-label="Last name"
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
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
            </div>
            <div className="row  my-2">
              <div className="col-6 checks1">
                <label for="InputEmail2" className="form-label">
                  Please rate the quality of the service you received from your
                  host
                  <span style={{ color: "red" }}>*</span>
                </label>

                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Excellent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Good
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Fair
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Bad
                  </label>
                </div>
              </div>
              <div className="col-4 checks2">
                <label for="InputEmail2" className="form-label">
                  Please rate the quality of your beverage
                  <span style={{ color: "red" }}>*</span>
                </label>

                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Excellent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Good
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Fair
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Bad
                  </label>
                </div>
              </div>
            </div>
            <div className="row  my-2">
              <div className="col-4 checks3">
                <label for="InputEmail2" className="form-label">
                  Was our restaurant clean ?
                  <span style={{ color: "red" }}>*</span>
                </label>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Excellent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Good
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Fair
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Bad
                  </label>
                </div>
              </div>
              <div className="col-4 checks4">
                <label for="InputEmail2" className="form-label">
                  Please rate your overall during experience
                  <span style={{ color: "red" }}>*</span>
                </label>

                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Excellent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Good
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Fair
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Bad
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 ">
                <button className="btn btn-success "> Submit Review </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Home;
