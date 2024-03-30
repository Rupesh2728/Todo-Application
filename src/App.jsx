import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskInput from './Components/TaskInput/TaskInput'
import TaskList from './Components/TaskList/TaskList';
const  App=()=>{
  return (
   <>
     <TaskInput/>
     <TaskList/>
   </>
  )
}

export default App
