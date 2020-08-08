import React from "react";
import "./styles.css";

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <div id="result">{this.props.result}</div>
      </div>
    );
  }
}

class KeyPad extends React.Component {
  render() {
    const keys = [
      "C",
      "empty",
      "empty",
      "/",
      "1",
      "2",
      "3",
      "+",
      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "*",
      "empty",
      "0",
      ".",
      "="
    ];
    return (
      <div id="keypad">
        {keys.map((key, index) => {
          return (
            <button
              name={key}
              key={index}
              className={key === "empty" ? "blank" : "item"}
              onClick={(e) => this.props.onClick(e.target.name)}
            >
              {key}
            </button>
          );
        })}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    result: ""
  };

  onClick = (name) => {
    switch (name) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.reset();
        break;
      default:
        this.setState({
          result: this.state.result + name
        });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: eval(this.state.result)
      });
      console.log(this.state.result);
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div className="calculator">
        <Result result={this.state.result} />
        <div className="spacer" />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
