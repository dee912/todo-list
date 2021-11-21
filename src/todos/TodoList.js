import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = [{ text: 'Hello' }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo => <TodoListItem key={todo} todo={todo} />)}
    </div>
  )
}

export default TodoList