import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/Static/NavBar';
import Goals from './Components/Goals/Goals';
import GoalForm from './Components/Goals/GoalForm';
import Tasks from './Components/Tasks/Tasks';
import TaskForm from './Components/Tasks/TaskForm.jsx';
import { baseUrl } from './Components/Static/Globals';
import TaskCard from './Components/Tasks/TaskCard';
// import TaskDetails from './Components/Tasks/TaskDetails';


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

   //UPDATE-PATCH completed boolean
  //  const handleMarkCompleted = (id) => {
  //   fetch(baseUrl + `tasks/${id}`, {
  //     method: "PATCH",
  //     headers,
  //     body: JSON.stringify({
  //       completed: !tasks.completed,
  //     }),
  //   })
  //     .then(r => r.json())
  //     .then(()=> tasks.map((task) => {
  //       if (task.id === id) {
  //         return id;
  //       } else {
  //         return task;
  //       }
  //     }), setTasks(id))
  //   }
 

  
  //   const updatedTask =  tasks.map((task) => {
  //     if (task.id === updatedTask.id) {
  //       return updatedTask;
  //     } else {
  //       return task;
  //     }
  //   });
  //  setTasks(updatedTask);
  // }
  
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
        
        <Route path="/goals" element={<Goals goals={goals} />} />
        <Route path="/goals/new" element={ <GoalForm addGoal={addGoal}/> } />
        
        <Route path="/tasks/" element={ <Tasks tasks={ tasks } handleDeleteTask={handleDeleteTask}
        // onUpdatedCompleted={handleCompletedTask}
          /> } />
        
        <Route path="/tasks/TaskCard" element={ <TaskCard onUpdatedCompleted={handleCompletedTask} /> } />
      
        <Route path="/tasks/new" element={ <TaskForm addTask={ addTask } addGoal={addGoal}/> } />
        {/* <Route exact path= "/goals/:id" element={ <TaskDetails goals={goals} /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;
