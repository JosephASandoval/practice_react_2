import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          character: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.character.name}</h1>
      </div>
    );
  }
}

export default App;
