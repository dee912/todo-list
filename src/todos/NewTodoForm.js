import React, { useState } from 'react'

const NewTodoForm = () => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here..."
        value={inputValue}
        onChange={handleChange}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  )
}

export default NewTodoForm