import React from "react";
import display from "./display";
import buttonPanel from "./buttonPanel";
import calculate from "../logic/calclate";
import "./App.css";

class App extends React.components {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <display value={this.state.next || this.state.total || "0"} />
        <buttonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export deffault App;
