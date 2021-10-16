import React, { Component } from "react";
import "./todoStyle.css";

// Two type of components in React JS
// 1. Function Component
// 2. Class Component(inherit from Component Class from React)

class Todo extends Component {
  state = {
    todoText: "",
    todoList: [],
  };

  //   constructor(params) {
  //       super(params);
  //       this.state = {
  //         todoText: "",
  //         todoList: [],
  //       };
  //   }

  onChangeText = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  onAddTodo = (event) => {
    event.preventDefault();
    console.log("clicked onAddTodo");
    this.setState({
      todoList: [...this.state.todoList, this.state.todoText],
    });
  };

  render() {
    console.log("Render");
    return (
      <div className="container">
        <h1 className="title">Todo App</h1>
        <form className="todo-form" onSubmit={this.onAddTodo}>
          <input
            type="text"
            value={this.state.todoText}
            placeholder="Please write your todo here..."
            onChange={this.onChangeText}
          />
          <button type="submit">Add Todo</button>
        </form>
        <div className="todo-list">
          <div className="todo-item">
            <input type="checkbox" name="isDone" id="isDone" />
            <span>Get Milk</span>
            <button>Delete Todo</button>
          </div>
          <div className="todo-item">
            <input type="checkbox" name="isDone" id="isDone" />
            <span>Get Milk</span>
            <button>Delete Todo</button>
          </div>
          <div className="todo-item">
            <input type="checkbox" name="isDone" id="isDone" />
            <span>Get Milk</span>
            <button>Delete Todo</button>
          </div>
        </div>
        <div className="filter-wrapper">
          <button>All</button>
          <button>Pedning</button>
          <button>Completed</button>
        </div>
      </div>
    );
  }
}

// const Todo = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Todo App</h1>
//       <form className="todo-form">
//         <input type="text" placeholder="Please write your todo here..." />
//         <button type="button">Add Todo</button>
//       </form>
//       <div className="todo-list">
//         <div className="todo-item">
//           <input type="checkbox" name="isDone" id="isDone" />
//           <span>Get Milk</span>
//           <button>Delete Todo</button>
//         </div>
//         <div className="todo-item">
//           <input type="checkbox" name="isDone" id="isDone" />
//           <span>Get Milk</span>
//           <button>Delete Todo</button>
//         </div>
//         <div className="todo-item">
//           <input type="checkbox" name="isDone" id="isDone" />
//           <span>Get Milk</span>
//           <button>Delete Todo</button>
//         </div>
//       </div>
//       <div className="filter-wrapper">
//         <button>All</button>
//         <button>Pedning</button>
//         <button>Completed</button>
//       </div>
//     </div>
//   );
// };

export default Todo;
