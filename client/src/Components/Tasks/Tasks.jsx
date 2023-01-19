import React from 'react'
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';

const Tasks = ({ tasks, handleDeleteTask }) => {

  let deleteTask = handleDeleteTask 
  // let workComplete = onUpdatedCompleted



  const taskCard = tasks.map(task => 
      <TaskCard 
        key={ task.id } 
        task={ task} 
        deleteTask={deleteTask} 
        // workComplete ={workComplete}
        />) ;



  return (
    <div>
      Tasks List
       { taskCard} 
       <div className="task-btn"> <Link to ="/tasks/new"> <button>Add New Task</button></Link>
       </div>
    </div>
    
  )
}

export default Tasks