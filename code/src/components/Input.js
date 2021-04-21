import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import todos from 'reducers/todos'

const Input = () => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newToDo = {
      id: uuidv4(),
      description: value,
      time: Date.now(),
      isComplete: false
    };
    dispatch(todos.actions.addToDo(newToDo))
    setValue('')
  }

  return (
    <>
      <div className='ending-div'>
        <button
          type='button'
          onClick={() => dispatch(todos.actions.allDone())}
          className='all-done-button'>
            All done
        </button>
      </div>

      <form
        onSubmit={onFormSubmit}
        className='input-container'>
        <label
          htmlFor='task'
          className='task-label'>
          <input
            type='text'
            onChange={e => setValue(e.target.value)}
            value={value}
            id='task'
            name='task'
            className='task'
            minLength='4'
            maxLength='140'
            required
            placeholder='Set auto reply on job email...'
          />
        </label>
        <button
          type='submit'
          className='button'>
            Add to planner
        </button>
      </form>
    </>
  )
}

export default Input