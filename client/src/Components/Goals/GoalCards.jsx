import React from 'react'
import { Link } from 'react-router-dom';

const GoalCards = ({ goal, task}) => {

  //****I want to a lists of tasks on goalCard instead of a link */

  return (
    <li className="cards_item">
      <div className="card"> 
        <div className="card_content"> 
           <div className="card_title"> { goal.name } </div>  
         
              <p className="card_text">Due: { goal.due_date }</p>
                  
                  <div className="card_detail">

                    {/* <li><Link to={`/task/${goal.id}`}>See Tasks</Link> </li> */}

                    <li><Link to={`/goals/${goal.id}`}>see tasks</Link> </li>
                    <br/>
                    <br/>
                
           {/* <button className="delete_buttton" onClick={ () => deleteGoal(goal.id)}> Done 
                    </button> */}
                  </div>
          </div>
      </div>
    </li>
  )
}

export default GoalCards