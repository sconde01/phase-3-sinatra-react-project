import React from 'react'
import { Link } from 'react-router-dom';

const GoalCards = ({ goal}) => {

  //****I want to a lists of tasks on goalCard instead of a link */

  return (
    <li className="cards_item">
      <div className="card"> 
        <div className="card_content"> 
           <div className="card_title"> { goal.name } </div>  
         
              <p className="card_text">Due: { goal.due_date }</p>
              <p className=" "> Task: { goal.tasks.name }</p>
                  
                  <div className="card_detail">

                    {/* <li><Link to={`/task/${goal.id}`}>See Tasks</Link> </li> */}

                     <Link to ="/tasks/new"> <button>Add a task</button></Link>
                    
                    <br/>
                
          
                  </div>
          </div>
      </div>
    </li>
  )
}

export default GoalCards