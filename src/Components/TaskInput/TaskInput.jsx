import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from '../../Redux/Slices/TodoSlice';




const TaskInput = () => {
    // const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState('Incomplete');
    const dispatch = useDispatch();
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTodo = () => {
        if (inputValue.trim() === '') {
            window.alert('Please Enter a Valid Task!!!');
            return;
          }

        if (inputValue.trim() !== '' && status) {
            dispatch(
                addTodo({
                  id: Date.now(),
                  title:inputValue,
                  status:status,
                  time: Date.now(),
                }))

        // setTodos([...todos, { id: Date.now(), text: inputValue }]);
        setInputValue('');
      }
    };
  
    return (<>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex">
          <input
            type="text"
            className="w-full rounded-l py-2 px-4 focus:outline-none bg-[#e7e5e5]"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>

        
      </div>
      </>
    );
}

export default TaskInput