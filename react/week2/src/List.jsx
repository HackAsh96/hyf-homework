import React, { Component } from "react";

class List extends Component {
  render() {
    const todo = this.props.list;

    console.log(todo);
    return (
      <div id="mainContainer">
        <ul id="containerList">
          {todo.map((item, i) => {
            return (
              <div
                id="list"
                style={
                  item.status
                    ? {
                        background: "rgba(0,0,0,.2)",
                        filter: "opacity(20%)"
                      }
                    : { fontWeight: "bold" }
                }
              >
                <li key={i}>{item.title}</li>
                <li key={i}>{item.date}</li>
                <button
                  onClick={() => {
                    this.props.delete(item);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    this.props.status(i);
                  }}
                >
                  change status
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
