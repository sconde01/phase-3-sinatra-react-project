import React from 'react'
// import { Link } from 'react-router-dom';
import GoalCards from './GoalCards';

const Goals = ({ goals }) => {
  
  const goalCards = goals.map(goal => <GoalCards key={ goal.id } goal={ goal} />) ;
         goals.sort((a, b) => new Date (a.due_date) - new Date (b.due_date))

  // const goalCards = goals.map((goal, index) => <GoalCards key={index} goal={ goal } 
  //         />)

  return (
    <div>
    <ul className="cards"> Goals List{ goalCards }</ul> 
    {/* <div className="AddGoalbtn"> <Link to ="/goals/new"> <button>Add Goal</button></Link></div> */}
  </div>)

}

export default Goals