import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Form } from "react-bootstrap";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      languages: [],
    }
  }
  componentDidMount() {

  }
  emailValidator(e){
    console.log(e.target.value);
    if(e.target.value.length > 0)
    {
      e.target.className = "form-control "
    }
    else{
     
      e.target.className = "form-control is-invalid"
    }
    

  }
  render() {
    return (
        <div className ="container p-5">
          <div className= "row shadow-lg p-5">
            <h2 className= "fw-bold mt-5">Aromatic Bar </h2>
            <p className=" my-3 text-center text-secondary fw-bold ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet </p>
            <div className="row justify-content-center my-4">
              <div className="col-5">
              <label for="InputEmail1" className="form-label">Customer Name<span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control" placeholder="First name" id="InputEmail1" aria-label="First name" />
              </div>
              <div className="col-5">
              <label for="InputEmail2" className="form-label">Email<span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control is-invalid" placeholder="Last name" id="InputEmail2" aria-label="Last name" onChange={this.emailValidator}/>
                <div id="validationServerUsernameFeedback" className="invalid-feedback">
                  Please choose a username.

                </div>
                <span><i class="flag flag-united-states"></i></span>
              </div>
              <div className="col-2">
                <button className="btn btn-primary" > submit </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
