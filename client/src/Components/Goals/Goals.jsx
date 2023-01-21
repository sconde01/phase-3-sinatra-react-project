import React from 'react'
import { Link } from 'react-router-dom';
import GoalCards from './GoalCards';

const Goals = ({ goals , handleDeleteGoal}) => {
  //console.log(goals)
  const goalCards = goals.map(goal => 
      <GoalCards 
        key={ goal.id } 
        goal={ goal} 
        deleteGoal={handleDeleteGoal}
        />) ;


  return (
    <div>
      <h1>GOALS</h1>
      <ul className="cards_goals">   
      <div className="task-btn"> <Link to ="/goals/new"> <button>Add New GOAL</button></Link> 
        { goalCards }
      </div>
      </ul> 
    
    </div>)

}

export default Goals