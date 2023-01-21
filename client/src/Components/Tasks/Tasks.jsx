import React from 'react'
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';

const Tasks = ({ tasks, handleDeleteTask , onUpdatedCompleted}) => {



  const taskCard = tasks.map(task => 
      <TaskCard 
        key={ task.id } 
        task={ task} 
        deleteTask={handleDeleteTask} 
        onUpdatedCompleted={onUpdatedCompleted}
        />) ;



  return (
    <div>
      <h1> TASKS </h1>
      <ul className= "Tasks">
       <div className="task-btn"> <Link to ="/tasks/new"> <button>Add New Task</button></Link>
       { taskCard} 
       </div>
       </ul>
    </div>
    
  )
}

export default Tasks