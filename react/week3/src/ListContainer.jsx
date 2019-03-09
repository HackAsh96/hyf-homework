import React, { Component } from "react";
import TodoList from "./TodoList";

class ListContainer extends Component {
  render() {
    return (
      <TodoList
        statusHandler={this.props.status}
        arrayTodos={this.props.arrayTodos}
        remove={this.props.remove}
        editTodos={this.props.edit}
        cancelEdit={this.props.cancel}
        updateTodo={this.props.update}
        editText={this.props.editText}
        editDate={this.props.editDate}
      />
    );
  }
}

export default ListContainer;
