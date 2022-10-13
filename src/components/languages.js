import React, { Component } from "react";
import axios from 'axios'
import { API_URL } from '../api'
import { useNavigate} from 'react-router-dom';



class Languages extends Component {
  constructor() {
    super();
    this.state = {
      languages: [],
    }
  }
  componentDidMount() {
    var self = this;
    axios({
      method: 'get',
      url: `${API_URL}/languages`,
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((result) => {
      console.log(result.data);
      let languages = [];
      for(var i=0; i< result.data.length; i++){
        languages.push(result.data[i])
      }
      this.setState({ languages: languages });
    }).catch((error) => {
      console.log(error);
    });
  }
  changeLanguage(elem){
    console.log(elem);
  }
  render() {
    return (
      <div className="col-sm">
        <select className="form-select" aria-label="Default select example" defaultValue="" onChange="changeLanguage">
          <option value="">{this.state.languages.length == 0?'No languages':'Open this select menu'}</option>
          {this.state.languages.map((item, index) => (
            <option key={index} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Languages;
