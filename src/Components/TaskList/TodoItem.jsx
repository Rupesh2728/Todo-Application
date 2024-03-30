import React from 'react';
import { faTrash,faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoItem = ({updatetodofunc,setModalShow,handleDelete,todo,key}) => {
  return (
    <div key={key} className="flex justify-between h-[5rem] bg-gray-100 p-2 mb-2 rounded-[0.6rem]"> 
              <div className='flex flex-col'>
               <span className='ml-[0.2rem]'>{todo.title}</span>
               {todo.status === "Completed" && <div className='w-[4.5rem] h-[1rem] text-[0.7rem] mt-[1rem] ml-[0.75rem] text-center text-[blue] bg-gray-300 rounded-[0.4rem]'>Completed</div>}
               {todo.status === "Incomplete" && <div className='w-[4.5rem] h-[1rem] text-[0.7rem] mt-[1rem] ml-[0.75rem] text-center text-[red] bg-gray-300 rounded-[0.4rem]'>Incomplete</div>}
              </div>
             
             <div className='flex flex-col'>
              <FontAwesomeIcon icon={faFilePen} className='text-[blue] mt-[0.5rem] hover:cursor-pointer' onClick={() => {setModalShow(true);updatetodofunc(todo)}}/>
              <FontAwesomeIcon icon={faTrash} className='text-[red] mt-[1rem] mr-[0.4rem] hover:cursor-pointer' onClick={() => handleDelete(todo.id)}/>
             </div>
             
    </div>
  )
}

export default TodoItem