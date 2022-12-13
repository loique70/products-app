import React from 'react'
import EditableTimer from './EditableTimer'

function EditableTimerList({timers, onTrashClick}) {
  const  content = timers.map(timer =>(
    <EditableTimer 
    key={timer.id}
    title = {timer.title}
    project = {timer.project}
    elapsed = {timer.elapsed}
    runmingSince = {timer.runmingSince}
    id={timer.id}
    onTrashClick = {onTrashClick}
    />
  ))
  return (
    <div>
      {content}
    </div>
  )
}

export default EditableTimerList
