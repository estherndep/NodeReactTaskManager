import React, { useState } from 'react'

const TaskInput = ({ onAdd }) => {
    const [text, setText] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      if (!text) {
        alert('Please add task description')
        return
      }
  
      onAdd({description: text})
      setText('')
    }
  
    return (
      <form className='add-form' onSubmit={handleSubmit}>
        <h4>Create a new todo</h4>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    )
  }

export default TaskInput
