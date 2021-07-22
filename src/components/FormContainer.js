import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      dietaryRestriction: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;

    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestriction: {
              ...prevState.dietaryRestriction,
              [name]: checked,
            },
          };
        })
      : this.setState((prevState) => {
          return {
            firstName: prevState.firstName,
            [name]: value,
          };
        });
  }

  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default FormContainer;
