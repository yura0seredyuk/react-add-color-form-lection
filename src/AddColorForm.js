import React from "react";

export class AddColorForm extends React.Component {
  state = {
    colorName: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      name: this.state.colorName
    });
  };

  render() {
    const { colorName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className="label">
          <span>Select color:</span>

          <input
            type="color"
            name="colorName"
            value={colorName}
            onChange={this.handleChange}
          />
        </label>

        <button>Submit</button>
      </form>
    );
  }
}
