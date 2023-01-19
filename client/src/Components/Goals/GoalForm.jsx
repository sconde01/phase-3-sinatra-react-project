import React, {useState} from 'react';
import { baseUrl, headers } from '../Static/Globals';
import { useNavigate } from "react-router-dom";

const Goalsnew = ({addGoal}) => {
  const [name, setName] = useState("");
  const [due_date, setDueDate] = useState();

  const navigate = useNavigate();

  const params = {
    name,
    due_date
  }
  
  const handleSubmit = e => {
    e.preventDefault();
  
  fetch(baseUrl + "/goals", {
    method: "POST",
    headers,
    body: JSON.stringify(params)
    })
    .then(r => r.json())
    .then(data => {
      addGoal(data);
      navigate('/goals');
    });
  }
  

  return (
    <div>
      <h3>Create a Goal</h3>
      
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={ name} 
            onChange={e => setName(e.target.value)} />
          </div>
          <br></br>
        <div>
            <label htmlFor="due_date">Due Date:</label>
            <input type="date" name="due_date" id="due_date" value={ due_date } onChange={e => setDueDate(e.target.value)} />
        </div>
          <br></br>
          <button id="button" type="submit">Add Goal</button>
      </form>
      
    </div>
  )
  
}
export default Goalsnew