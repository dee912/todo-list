import React from 'react'

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark As Completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  )
}

export default TodoListItem