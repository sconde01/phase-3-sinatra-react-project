import React from 'react'
import { Link } from 'react-router-dom';
import GoalCards from './GoalCards';

const Goals = ({ goals }) => {
  
  const goalCards = goals.map(goal => 
      <GoalCards 
        key={ goal.id } 
        goal={ goal} />) ;
        goals.sort((a, b) => new Date (a.due_date) - new Date (b.due_date)); 


  return (
    <div>
    <ul className="cards_goals"> 
    <h2>Goals List</h2>
    { goalCards }
    <div className="task-btn"> <Link to ="/goals/new"> <button>Add New GOAL</button></Link> </div>
    </ul> 

  </div>)

}

export default Goals