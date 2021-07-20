import React, { Component } from "react";

class App extends Component {
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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />

          <br />

          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />

          <br />

          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>

          <br />

          <select
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose a Location --</option>
            <option value="san francisco">San Francisco</option>
            <option value="new york">New York</option>
            <option value="tokyo">Tokyo</option>
            <option value="las vegas">Las Vegas</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestriction.isVegan}
              onChange={this.handleChange}
            />
            Vegan?
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestriction.isKosher}
              onChange={this.handleChange}
            />
            Kosher?
          </label>
          
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestriction.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free?
          </label>

          <br />

          <button>Submit</button>
        </form>

        <hr />

        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {}
        </p>
      </main>
    );
  }
}

export default App;
