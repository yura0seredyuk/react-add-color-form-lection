import React from "react";
import { AddColorForm } from "./AddColorForm";
import { ColorsList } from "./ColorsList";

export class App extends React.Component {
  state = {
    colors: [{ id: 1, name: "red" }]
  };

  addColor = (color) => {
    this.setState((prevState) => ({
      colors: [
        ...prevState.colors,
        { ...color, id: prevState.colors.length + 1 }
      ]
    }));
  };

  render() {
    return (
      <div className="App">
        <AddColorForm onSubmit={this.addColor} />
        <ColorsList colors={this.state.colors} />
      </div>
    );
  }
}
