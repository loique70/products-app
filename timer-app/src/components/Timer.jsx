import * as hp from 'helper-js'

function Timer({id,title, project, elapsed,onTrashClick}) {
  let handleTrashClick  = () => {
     onTrashClick(id)
  }
  return (
    <div className="timer-container">
      <div className="description">
        <div className="header">
          {title}
        </div>
        <div className="project">
          {project}
        </div>
        <div className="counter">
          <h2>{elapsed}</h2>
        </div>
        <div className="option-button">
          <button className="edit-button" >Edit</button>
          <button className="delete-button" onClick={handleTrashClick}>Delete</button>
        </div>
      </div>
      <div className="start">
        <button className="start-button"> Start</button>
      </div>
    </div>
  )
}

export default Timer
