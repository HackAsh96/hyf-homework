import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const removeItem = this.props.remove;
    const arrayTodos = this.props.arrayTodos;
    const statusHandler = this.props.statusHandler;
    const editTodos = this.props.editTodos;
    const cancelEdit = this.props.cancelEdit;
    const updateTodo = this.props.updateTodo;
    const editText = this.props.editText;
    const editDate = this.props.editDate;

    const list = arrayTodos.map(todo => {
      if (todo.isEdit) {
        console.log(editText);
        return (
          <li key={todo.id}>
            <span>
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => statusHandler(todo.id)}
              />
              <input
                type="text"
                onChange={editText}
                placeholder="Edit your text"
              />
              <input
                type="text"
                onChange={editDate}
                placeholder="dd/month/yy"
              />
              <button onClick={() => updateTodo(todo.id)}>Update</button>
              <button onClick={() => cancelEdit(todo.id)}>Cancel</button>
              <button onClick={() => removeItem(todo.id)}>Remove</button>
            </span>
          </li>
        );
      } else {
        return (
          <li key={todo.id}>
            <span className={todo.status ? "todo-item--done" : ""}>
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => statusHandler(todo.id)}
              />
              {todo.text}
            </span>
            <span className={todo.status ? "todo-item--done" : ""}>
              {todo.date}
            </span>
            <span>
              <button onClick={() => editTodos(todo.id)}>Edit</button>
              <button onClick={() => removeItem(todo.id)}>Remove</button>
            </span>
          </li>
        );
      }
    });
    return <ul>{list}</ul>;
  }
}

export default TodoList;
