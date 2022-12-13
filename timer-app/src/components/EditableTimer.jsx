import React from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'
import { useState } from 'react';

function EditableTimer({id,title,project, runningSince, elapsed, onTrashClick}) {
   const [editFormOpen, setEditFormOpen] = useState(false)
   let content;
    if(editFormOpen){
        content = <TimerForm 
                id={id}
                title = {title}
                project = {project}
        />;
    } else{
        content = <Timer
                id={id}
                title = {title}
                project = {project}
                elapsed = {elapsed}
                runningSince = {runningSince}
                onTrashClick = {onTrashClick}
        />;
    }
    
    return (
        <div className='editable-timer-container'>
            {content}
        </div>
    )
}

export default EditableTimer
