import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = [{ text: 'Hello' }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList