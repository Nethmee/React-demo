import React, { Component } from "react";
import "./App.css";
import TodoElement from "./TodoElement";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleTodo: {
        id: "",
        title: "",
        description: "",
        completed: false,
        deleted: false,
      },

      TodoList: [
        {
          id: 0,
          title: "Math HomwWork",
          description: "Try the problems in page 23",
          completed: false,
          deleted: false,
        },

        {
          id: 1,
          title: "Laundry",
          description: "Dry clean the party dress",
          completed: false,
          deleted: false,
        },
        {
          id: 2,
          title: "React project",
          description: "Complete the react todo list mini project",
          completed: false,
          deleted: false,
        },

        {
          id: 3,
          title: "Complete the work book",
          description: "bla bla bla",
          completed: false,
          deleted: false,
        },
      ],
    };
  }

  titletHandler = (e) => {
    const todo = this.state.singleTodo;

    todo.title = e.target.value;
    // console.log(e.target.value);

    this.setState(state => {
      return {singleTodo: todo}
    });
  };

  descriptionHandler = (e) => {
    let todo = this.state.singleTodo;

    todo.description = e.target.value;
    // console.log(e.target.value);

    this.setState(state => {
      return {singleTodo: todo}
    });
  };

  AddTodo = () => {
    const todos = this.state.TodoList;
    todos.unshift(this.state.singleTodo);

    this.setState(state => {
      return {
        TodoList: todos,
        singleTodo: {
          id: "",
          title: "",
          description: "",
          completed: false,
          deleted: false,
        },
      };
    });
  };

  render() {
    return (
      <>
        {console.log("hii")}
        <div className="TextInput">
          <input
            type="text"
            placeholder="Add your todo-title"
            onChange={this.titletHandler}
            value={this.state.singleTodo.title}
          />
          <input
            type="text"
            placeholder="Add your todo-description"
            onChange={this.descriptionHandler}
            value={this.state.singleTodo.description}
          />
          <input type="button" value="Add" onClick={this.AddTodo} />

          {this.state.TodoList.map((todo) => (
            <TodoElement todo={todo} />
          ))}
        </div>
      </>
    );
  }
}

export default ToDoList;
