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
      <li className={task.completed ? "completed" : ""}>
      <div className="card">
      <div className="card_content"> 
        <div className="card_title"> { task.name } </div>
       <p className="card_text">Description:<br/>{ task.description }</p>
      <div className="card_detail">
        <p className= "card_text"> Goal: { task.goal.name  }</p>  
            <br/>
        
      <button className={task.completed ? "task completed" : "task not completed"}
          onClick={handleChangeCompleteClick}>
            {task.completed ? "This task is:" : "This task is NOT:"} Completed
          </button>

        <br></br>
        <button className="delete_buttton" onClick={ () => deleteTask(task.id)}> Delete </button>
        </div>
    </div>
    </div>
    </li>
  </li>
    
  )
}

export default TaskCard