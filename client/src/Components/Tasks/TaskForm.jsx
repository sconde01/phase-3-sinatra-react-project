import React, {useState} from 'react';
import { baseUrl, headers } from '../Static/Globals';
import { useNavigate } from "react-router-dom";

const Tasknew = ({addTask, addGoal, goals}) => {
  const [name, setTaskName] = useState("");
  const [description, setDescription] = useState();
  // const [goal_name, setGoalName] = useState("");
  const [goal_id, setGoalId] = useState();

  const navigate = useNavigate(); 
  
  const task_params = {
    name,
    description,
    goal_id
  }
  // const goal_params = {
  //   goal_name,
  // }
  
  const handleSubmit = e => {
    e.preventDefault();
  
  fetch(baseUrl + "/tasks", {
    method: "POST",
    headers,
    body: JSON.stringify(task_params)
    })
    .then(r => r.json())
    .then(data => {
      addTask(data);
      navigate('/tasks');
    });
  
  // fetch(baseUrl + "/goals", {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify(goal_params)
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //     addGoal(data);
  //   });
  }


  return (
    <div>
      <h3>Create a NEW TASK</h3>
      
      <form onSubmit={handleSubmit}>
          <div>
            {/* TASK NAME */}
            <label htmlFor="name">Task NAME: </label>
            <input type="text" name="name" id="name" value={ name} 
            onChange={e => setTaskName(e.target.value)} />
          </div>

        <br></br>

            {/* TASK DESCRIPTION */}
          <div>
            <label htmlFor="due_date">Description:</label>
            <input type="text" name="description" id="due_date" value={ description} onChange={e => setDescription(e.target.value)} />
          </div>

        <br></br>

          {/* GOAL NAME */}
          {/* <div> */}
            {/* <label htmlFor="name">What Is Your Goal?: </label> */}
      {/* ***??? */}
            {/* <input type="text" name="goal_name" id="goal_name" value={ goal_name} 
            onChange={e => setGoalName(e.target.value)} />
          </div> */}

        <label>
        <strong>Filter Goal Name:</strong>
        <select 
          id = "goal_id"
            onChange={e => setGoalId(e.target.value)}value={goal_id}>

          {goals.map( goal => 
            <option value={goal.id}>{goal.name}</option> )}
        </select>
      </label>

        <br></br>
        <br></br>

        <br></br>
          <button id="button" type="submit">Add Task</button>
      </form>
      
    </div>
  )
}
export default Tasknew