import React from "react";
import List from "./List";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: new Date().toDateString(),
      todoList: []
    };
    // console.log(this.state);
  }
  addTodo = () => {
    const { title, date, todoList } = this.state;
    if(title==''){
      alert('add a title')
    }
    else{
      const objList = {
        title,
        date,
        status: false
      };
      const addObj = todoList.concat(objList);
      this.setState({ todoList: addObj });
    }
  };
  keyPress=(e)=>{
    if(e.key=='Enter'){
      const { title, date, todoList } = this.state;
      if(title==''){
        alert('add a title')
      }
      else{
        const objList = {
          title,
          date,
          status: false
        };
        const addObj = todoList.concat(objList);
        this.setState({ todoList: addObj });
      }
    }
  }
  todoTextHandler = e => {
    this.setState({ title: e.target.value });
  };
  todoDateHandler = e => {
    this.setState({ date: new Date(e.target.value).toDateString() });
  };
  deleteTodo = i => {
    const todoLeft = this.state.todoList.filter(todo => todo != i);
    this.setState({ todoList: todoLeft });
  };
  changeStatus = index => {
    const { todoList } = this.state;
    const selected = todoList[index];
    !selected.status ? (selected.status = true) : (selected.status = false);
    this.setState({ todoList });
  };
  render() {
    return (
      <React.Fragment>
        <input
          placeholder="type something todo"
          onChange={this.todoTextHandler}
          onKeyPress={this.keyPress}
        />
        <input placeholder="Ex: 20/march/2020"
        onKeyPress={this.keyPress}
        onChange={this.todoDateHandler} />
        <button onClick={this.addTodo}>add</button>
        <List
          list={this.state.todoList}
          delete={this.deleteTodo}
          status={this.changeStatus}
        />
      </React.Fragment>
    );
  }
}

export default Todos;
