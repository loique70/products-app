import React from 'react'
import { useState } from 'react'

function TimerForm({id,onFormSubmit, onFormClose}) {

  const[title, setTitle] = useState('')
  const[project, setProject] = useState('')

  let handleTitleChange = (e) => {
    return setTitle(e.target.value)
  }

  let handleProjectChange = (e) => {
     setProject(e.target.value)
  };

  let handleSubmit = () =>{
   onFormSubmit({
    id:id,
    title:title,
    project:project
   })
  }


  const submitText = id? 'Update' : 'Create'
  return (
    <div className='timer-form-conatiner'>
      <div className="form-container">
        <div className="field">
            <label>Title</label>
            <input type='text' value = {title}  onChange = {handleTitleChange }/>
        </div>
        <div className="field">
            <label>Project</label>
            <input type='text' value = {project} onChange = { handleProjectChange  } />
        </div>
      </div>
      <div className="button-container">
        <button className='update' onClick={handleSubmit}>{submitText}</button>
        <button className='cancel' onClick={onFormClose}>Cancel</button>
      </div>
    </div>
  )
}

export default TimerForm
