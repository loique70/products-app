import React from 'react'
import { useState } from 'react'
import TimerForm from './TimerForm'

function ToggleableTimerForm({onFormSubmit}) {
  const [isOpen, setIsOpen] = useState(false)
  let cont,

  handleFormOpen = () => {
    setIsOpen(true)
  };

  let handleFormClose = () => {
    setIsOpen(false)
  }

 
  let handleFormSubmit = (timer) => {
    onFormSubmit(timer)
    setIsOpen(false)
  }

  if(isOpen){
    cont = <TimerForm 
              onFormSubmit = {handleFormSubmit}
              onFormClose = {handleFormClose}
           />
  } else {
    cont = (
      <div className='toggle'>
        <button onClick={ handleFormOpen }>+</button>
      </div>
    )
  }

  return (
    <div className="toggle-container">
      {cont}
    </div>
  )
}

export default ToggleableTimerForm
