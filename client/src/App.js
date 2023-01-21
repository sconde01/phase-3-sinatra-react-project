import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/Static/NavBar';
import Goals from './Components/Goals/Goals';
import GoalForm from './Components/Goals/GoalForm';
import Tasks from './Components/Tasks/Tasks';
import TaskForm from './Components/Tasks/TaskForm.jsx';
import { baseUrl } from './Components/Static/Globals';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [goals, setGoals] = useState([]);

  //GET GOALS AND TASKS
  useEffect(() => {
    fetch(baseUrl + "/goals")
      .then(resp => resp.json())
      .then(setGoals)
  },[])

  useEffect(() => {
    fetch(baseUrl + "/tasks")
      .then(resp => resp.json())
      .then(setTasks)
  },[])

  //DELETE TASKS
  const handleDeleteTask = id => {
    fetch(baseUrl + `/tasks/${id}`, {
      method: "DELETE", 
    })
    .then(r => r.json())
    .then(() => removeTask(id))
    ;}

      const removeTask = id => {
        setTasks(tasks.filter( task => task.id !== id))
      }

  //DELETE GOALS
  const handleDeleteGoal = id => {
    fetch(baseUrl + `/goals/${id}`, {
      method: "DELETE", 
    })
    .then(r => r.json())
    .then(() => removeGoal(id))
    ;}

      const removeGoal = id => {
        setGoals(goals.filter( goal => goal.id !== id))
      }

  
  //CREATE (form helpers)
  const addGoal = goal => {
    setGoals([...goals, goal])
    }
  const addTask = task => {
    setTasks([...tasks, task])
    }

  //PATCH helper
  const handleCompletedTask= (updatedCompleted) =>{
    const updatedCompletedTasks = tasks.map((task) => {
        if (task.id === updatedCompleted.id) {
          return updatedCompleted;
        } else {
          return task;
        }
      });
      setTasks(updatedCompletedTasks);
    }
  
  

  return (
    <Router>
      <NavBar />
      <Routes>
        
        <Route path="/goals" element={<Goals goals={goals} handleDeleteGoal={handleDeleteGoal}
        />} />
        <Route path="/goals/new" element={ <GoalForm addGoal={addGoal}/> } />
        
        <Route path="/tasks/" element={ <Tasks tasks={ tasks }  handleDeleteTask={handleDeleteTask} onUpdatedCompleted={handleCompletedTask} /> } />            
        <Route path="/tasks/new" element={ <TaskForm addTask={ addTask } addGoal={addGoal} goals={goals}/> } />

      </Routes>
    </Router>
  );
}

export default App;
