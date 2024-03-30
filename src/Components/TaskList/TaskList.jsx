import React, { useState,useEffect } from 'react';
import UpdateTaskModal from './UpdateTaskModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo} from '../../Redux/Slices/TodoSlice';




const TaskList = () => {

  const [updatetodo,setupdatetodo] = useState({});
  

  const todoList = useSelector((state) => state.todo.todoList);    // useselector hook is used to get the required value from the state
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));  // We need to sort the tasks based on time i.e. latest task comes up

  const [TodoList,setTodoList]=useState(sortedTodoList);

  const completedtodolist=sortedTodoList.filter((todo)=>todo.status==='Completed');  // Filter for Completed tasks
  const incompletedtodolist=sortedTodoList.filter((todo)=>todo.status==='Incomplete');  // Filter for InComplete tasks
  

  const [All,setAll]=useState(true);
  const [done,setdone]=useState(false);
  const [notdone,setnotdone]=useState(false);


  const updatetodofunc=(todo)=>{
    setupdatetodo(todo);
  }

  const [modalShow, setModalShow] =   useState(false);
  const dispatch = useDispatch();
  const handleDelete = (Id) => {
    dispatch(deleteTodo(Id));
    window.location.reload();
  };





  return (
    <>
     <UpdateTaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        todo ={updatetodo}
      />

     <div className="max-w-md mx-auto mt-8">
     <div className='flex justify-center mt-[2rem]'>
        <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-[0.6rem] w-[4rem] h-[1.8rem] text-[0.9rem] mr-[1rem]" onClick={()=>{setTodoList(sortedTodoList);setAll(true);setnotdone(false);setdone(false)}} >
            All
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-[0.6rem] w-[4rem] h-[1.8rem] text-[0.9rem]" onClick={()=>{setTodoList(incompletedtodolist);setAll(false);setnotdone(true);setdone(false)}} >
            Todo
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-[0.6rem] w-[6rem] h-[1.8rem] text-[0.9rem] ml-[1rem]" onClick={()=>{setTodoList(completedtodolist);setAll(false);setnotdone(false);setdone(true)}}>
            Completed
        </button>

        </div>
        <ul className="mt-4">
           {TodoList.map((todo,index)=>{
            return <TodoItem todo={todo} key={index} setModalShow={setModalShow} handleDelete={handleDelete} updatetodofunc={updatetodofunc}/>
           })}

           {
            All && !done && !notdone && sortedTodoList.length===0 && <p>No Tasks to be done in the Todo List</p>
           }

           {
            !All && done && !notdone && completedtodolist.length===0 && <p>None of the tasks are completed!!!</p>
           }

           {
            !All && !done && !notdone && incompletedtodolist.length===0 && <p>Congratulations,All Tasks are done!!!</p>
           }
        </ul>
     </div>
    
    </>
  )
}

export default TaskList