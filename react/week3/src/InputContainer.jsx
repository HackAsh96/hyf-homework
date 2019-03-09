import React, { Component } from "react";
import ListContainer from "./ListContainer";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.id = 0;
    this.state = {
      todos: [],
      inputText: "",
      inputDate: "",
      editText: "",
      editDate: ""
    };
  }
  handlerEditDate = e => {
    const { editDate } = this.state;
    this.setState({ editDate: e.target.value });
  };
  handlerEditText = e => {
    const { editText } = this.state;
    this.setState({ editText: e.target.value });
  };
  handlerDateInput = e => {
    const { inputDate } = this.state;
    this.setState({ inputDate: e.target.value });
  };
  handlerTextInput = e => {
    const { inputText } = this.state;
    this.setState({ inputText: e.target.value });
    // console.log(inputText);
  };
  addTodo = () => {
    const { todos, inputText, inputDate } = this.state;
    if (inputText == "") {
      alert("Add a Todo");
    } else {
      this.id = this.id + 1;
      const newTodo = {
        id: this.id,
        text: inputText,
        date: new Date(inputDate).toDateString(),
        status: false,
        isEdit: false
      };
      const newTodos = todos.concat(newTodo);
      this.setState({ todos: newTodos, inputText: "", inputDate: "" });
    }
  };
  removeTodos = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };
  statusHandler = id => {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todo = this.state.todos[index];
    todo.status = !todo.status;
    this.setState({ todos: this.state.todos });
  };
  editTodo = id => {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todo = this.state.todos[index];
    todo.isEdit = !todo.isEdit;
    this.setState({ todos: this.state.todos });
  };
  cancelEdit = id => {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todo = this.state.todos[index];
    todo.isEdit = !todo.isEdit;
    this.setState({ todos: this.state.todos });
  };
  updateTodo = id => {
    const { todos, editText, editDate } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const todo = todos[index];
    todo.isEdit = !todo.isEdit;
    if (editText == "" && editDate == "") {
      alert("Cancel instead");
    } else if (editText == "") {
      todo.date = new Date(editDate).toDateString();
      this.setState({ todos: this.state.todos });
    } else if (editDate == "") {
      todo.text = editText;
      this.setState({ todos: this.state.todos });
    } else {
      todo.date = new Date(editDate).toDateString();
      todo.text = editText;
      this.setState({ todos: this.state.todos });
    }
  };
  componentDidUpdate() {
    console.log(this.state.todos);
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Add your text"
          value={this.state.inputText}
          onChange={this.handlerTextInput}
        />
        <input
          type="text"
          placeholder="dd/month/yy"
          value={this.state.inputDate}
          onChange={this.handlerDateInput}
        />
        <button onClick={this.addTodo}>Add</button>
        <ListContainer
          arrayTodos={this.state.todos}
          remove={this.removeTodos}
          status={this.statusHandler}
          edit={this.editTodo}
          cancel={this.cancelEdit}
          update={this.updateTodo}
          editText={this.handlerEditText}
          editDate={this.handlerEditDate}
        />
      </React.Fragment>
    );
  }
}

export default InputContainer;
