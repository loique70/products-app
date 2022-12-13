import React from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import {timers} from '../data/timers'
import { useState } from 'react'


function TimerDashboard() {
  let [timer, setTimers] = useState(timers),

  handleCreateFormSubmit = (time) =>{
    setTimers([...timer, time])
  }
  
  let handleTrashClick = (timerId) => {
      timer = timer.filter(t => t.id !== timerId)
      setTimers(timer)
  }
  return (
    <div className='dashboard-container'>
      <EditableTimerList timers = {timer} onTrashClick = {handleTrashClick}/>
      <ToggleableTimerForm  onFormSubmit ={handleCreateFormSubmit} />
    </div>
  )
}

export default TimerDashboard
