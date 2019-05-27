import React, { Component } from "react";
import axios from "axios";



class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      price: "",
      description:"",
      contact: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  addItem(e) {
    e.preventDefault();
      axios
      .post("/api/hbs/",{
        image: this.state.image,
        price: this.state.price,
        description: this.state.description,
        contact: this.state.contact
      })
      .then(response => {
        console.log(response.data);
        this.props.updateHbs(response.data)
        this.props.passNewHb(response.data);
      })
      .catch(error => {
        
      });
  }

  handleChange(e) {
    const {name, value} = e.target

    this.setState({ [name]: value});
  }
    render() {
      
      return (
        <form className="form">
          <h2>Sell Handbag</h2>
         <input value={this.state.image} name="image" onChange={this.handleChange} placeholder="image" />
          <input value={this.state.price} name="price" onChange={this.handleChange} placeholder="price" />
          <input value={this.state.description} name= "description" onChange={this.handleChange} placeholder="description" />
          <input value={this.state.contact} name="contact" onChange={this.handleChange} placeholder="contact" />
          <button id="submit-form" onClick={e => this.addItem(e)}>Submit</button>
        </form>
        );
    }
};


export default Add;