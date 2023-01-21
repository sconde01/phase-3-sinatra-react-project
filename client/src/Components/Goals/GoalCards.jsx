import React from 'react'
import { Link } from 'react-router-dom';

const GoalCards = ({ goal, deleteGoal}) => {

//map tasks ul
    const tasks_li = goal.tasks.map( task =>
      <li key={task.id} >{task.name}</li>
      )
    
//alert delete goals AND tasks
    const clickDeleteAlert = ()=> {
      alert("Goal and it's tasks are now deleted!!")
    }


  return (
    <li className="cards_item">
      <div className="card"> 
        <div className="card_content"> 
           <div className="card_title"> { goal.name } </div>  
         
            <p className="card_text">Due: { goal.due_date }</p>
              <ul>{tasks_li}</ul>    
            <br></br>
          <div className="card_detail">
           <Link to ="/tasks/new"> <button >Add a task </button></Link>
            <br></br>
            <br></br>
            <button className="delete_goal" onClick={ () => {deleteGoal(goal.id); clickDeleteAlert();}
            } > 
              <span role="img" aria-label="delete"> 🗑 </span>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default GoalCards