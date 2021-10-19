import React, { Component, createRef } from 'react';
import './todoStyle.css';

// Two type of components in React JS
// 1. Function Component
// 2. Class Component(inherit from Component Class from React)

class Todo extends Component {
  state = {
    todoList: [],
  };

  todoInput = createRef();

  // onChangeText = (event) => {
  //   this.setState({
  //     todoText: event.target.value,
  //   });
  // };

  onAddTodo = (event) => {
    event.preventDefault();
    // this.setState({
    //   todoList: [...this.state.todoList, this.state.todoText],
    //   todoText: "",
    // });
    this.setState(({ todoList }) => ({
      todoList: [
        ...todoList,
        { text: this.todoInput.current.value, id: new Date().valueOf() },
      ],
    }));
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <h1 className="title">Todo App</h1>
        <form className="todo-form" onSubmit={this.onAddTodo}>
          <input
            ref={this.todoInput}
            type="text"
            placeholder="Please write your todo here..."
          />
          <button type="submit">Add Todo</button>
        </form>
        <div className="todo-list">
          {todoList.map((item) => (
            <div className="todo-item" key={item.id}>
              <input type="checkbox" name="isDone" id="isDone" />
              <span>{item.text}</span>
              <button type="button">Delete Todo</button>
            </div>
          ))}
        </div>
        <div className="filter-wrapper">
          <button type="button">All</button>
          <button type="button">Pedning</button>
          <button type="button">Completed</button>
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
