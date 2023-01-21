import React from 'react'
import { headers } from '../Static/Globals';

const TaskCard = ({task, deleteTask, onUpdatedCompleted}) => {

  const handleChangeCompleteClick = () => {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        completed: !task.completed,
      }),
    })
    .then(r=> r.json())
    .then((updatedCompleted)=> onUpdatedCompleted(updatedCompleted));
  }

  return (
    <li className="cards_item">
      <div className="card">
      <div className="card_content"> 
        <div className="card_title"> { task.name } </div>
       <p className="card_text">Description:<br/>{ task.description }</p>
        <p className= "card_text"> What is your Goal:<br/> <mark>{ task.goal.name  }</mark></p>  
      <div className="card_detail"> 
      <div className={task.completed ? "completed" : ""}>
        <button className={task.completed ? "taskdone" : "tasknotdone"}
          onClick={handleChangeCompleteClick}>
            {task.completed ? "Great," : "NOT"} Completed!
        </button>
      </div>

        <br></br>
        <button className="delete_buttton" onClick={ () => deleteTask(task.id)}> 
            <span role="img" aria-label="delete">
              🗑 </span>
        </button>
        </div>
    </div>
    </div>
  </li>
    
  )
}

export default TaskCard