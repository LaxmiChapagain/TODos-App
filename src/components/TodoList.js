import React from "react";
import Todo from './Todo';
import countUncompleted from './count.js'
const TodoList =({todos, setTodos})=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo)=>(
                 <Todo setTodos={setTodos}
                 todos={todos}
                  key ={todo.id}
                  todo={todo}
                   text ={todo.text}
                   />
            ))}
        </ul> <p>No of todos items: {countUncompleted(todos)}</p>
      </div>
    )
} 
export default TodoList;