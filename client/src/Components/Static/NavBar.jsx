import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <Link to ="/">Home</Link> */}
      <Link to ="/goals">Goals</Link>
      {/* <Link to ="/goals/new">Goal Maker</Link> */}
      <Link to ="/tasks">Tasks</Link>
    </nav>
  )
}

export default NavBar