
import React, { Component } from "react";
import ReactCountryFlag from "react-country-flag"


class Test  extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "Canada" };
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Canada"> { '\uD83C\uDDE8\uD83C\uDDE6' } Canada</option>
            <option value = "United States">{'\uD83C\uDDFA\uD83C\uDDF8'} United States</option>
          </select>
        </form>
      );
    }
  }

  
  export default Test;


{/*               
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Canada">
                  {" "}
                  {"\uD83C\uDDE8\uD83C\uDDE6"} Canada
                </option>
                <option value="United States">
                  {"\uD83C\uDDFA\uD83C\uDDF8"} United States
                </option>
              </select> */}

