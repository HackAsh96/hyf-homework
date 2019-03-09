import React, { Component } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import TodoList from "./TodoList";

class CompsContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <InputContainer />
      </div>
    );
  }
}

export default CompsContainer;
