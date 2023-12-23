import "./App.css";
import React, { Component } from "react";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    myString: "Hello",
    myStringOne: "World",
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.myStringOne}</h1>
        <Todo myString = {this.state.myString}/>
      </div>
    );
  }
}
export default App;
