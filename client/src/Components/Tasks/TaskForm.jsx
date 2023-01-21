import React, {useState} from 'react';
import { baseUrl, headers } from '../Static/Globals';
import { useNavigate } from "react-router-dom";

const Tasknew = ({addTask, goals}) => {
  const [name, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [goal_id, setGoalId] = useState("");

  const navigate = useNavigate(); 
  
  const task_params = {
    name,
    description,
    goal_id
  }

  
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
  }
  
  const goal_drop_map = goals.map( goal => 
    <option value={goal.id} key={goal.id}>{goal.name}</option> )


  return (
    <div>
      <h3>Create a NEW TASK</h3>
      
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Task NAME: </label>
            <input type="text" name="name" id="name" value={ name} 
            onChange={e => setTaskName(e.target.value)} />
          </div>

        <br></br>

          <div >
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" id="description" value={ description} onChange={e => setDescription(e.target.value)} />
          </div>

        <br></br>

        <label>
        <strong>Filter Goal Name:</strong>
        <select 
          id = "goal_id"
            onChange={e => setGoalId(e.target.value)}value={goal_id}>{goal_drop_map}
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