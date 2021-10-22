import React, { Component, createRef } from 'react';
import { Formik } from 'formik';
import './todoStyle.css';

// Two type of components in React JS
// 1. Function Component
// 2. Class Component(inherit from Component Class from React)

class Todo extends Component {
  state = {
    todoText: '',
    todoList: [],
    filterType: 'all',
  };

  // onChangeText = (event) => {
  //   this.setState({
  //     todoText: event.target.value,
  //   });
  // };

  onAddTodo = (values, actions) => {
    // this.setState({
    //   todoList: [...this.state.todoList, this.state.todoText],
    //   todoText: "",
    // });
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            text: values.text,
            id: new Date().valueOf(),
            isDone: false,
          },
        ],
      }),
      () => {
        actions.resetForm();
      }
    );
  };

  completeTodo = (item) => {
    this.setState(({ todoList: list }) => ({
      todoList: list.map((x) => {
        if (x.id === item.id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      }),
    }));
  };

  deleteTodo = (item) => {
    this.setState(({ todoList: list }) => ({
      todoList: list.filter((x) => x.id !== item.id),
    }));
  };

  onFilter = (type) => {
    this.setState({ filterType: type });
  };

  render() {
    const { todoList, filterType } = this.state;
    return (
      <div className="container">
        <h1 className="title">Todo App</h1>
        <Formik
          initialValues={{
            text: '',
          }}
          validate={(values) => {
            const error = {};

            if (!values.text) {
              error.text = 'Required...';
            }
            return error;
          }}
          onSubmit={this.onAddTodo}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <form className="todo-form" onSubmit={handleSubmit}>
              <div>
                <input
                  value={values.text}
                  name="text"
                  type="text"
                  placeholder="Please write your todo here..."
                  onChange={handleChange}
                />
                <button type="submit">Add Todo</button>
              </div>
              {errors.text && <span>{errors.text}</span>}
            </form>
          )}
        </Formik>

        <div className="todo-list">
          {todoList
            .filter((item) => {
              switch (filterType) {
                case 'completed':
                  return item.isDone;
                case 'pending':
                  return !item.isDone;
                default:
                  return true;
              }
            })
            .map((item) => (
              <div className="todo-item" key={item.id}>
                <input
                  type="checkbox"
                  name="isDone"
                  id="isDone"
                  checked={item.isDone}
                  onChange={() => this.completeTodo(item)}
                />
                <span>{item.text}</span>
                <button type="button" onClick={() => this.deleteTodo(item)}>
                  Delete Todo
                </button>
              </div>
            ))}
        </div>
        <div className="filter-wrapper">
          <button type="button" onClick={() => this.onFilter('all')}>
            All
          </button>
          <button type="button" onClick={() => this.onFilter('pending')}>
            Pedning
          </button>
          <button type="button" onClick={() => this.onFilter('completed')}>
            Completed
          </button>
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
