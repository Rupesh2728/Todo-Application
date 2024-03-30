import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateTodo } from '../../Redux/Slices/TodoSlice';
import { useDispatch } from 'react-redux';


const UpdateTaskModal=(props)=>{
    const [status, setStatus] = useState(props.todo.status);
    const [inputValue, setInputValue] = useState(props.todo.title);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleSubmit = () => {
        console.log(inputValue,status);
        if (inputValue.trim() === '') {
            window.alert('Please Enter a Valid Task!!!');
            return;
          }

        if (inputValue.trim() !== '' && status) {
            if ({props}.todo.title !== inputValue || props.todo.status !== status) {
                {
                 dispatch(updateTodo({ ...props.todo, title:inputValue, status }));
                }
            
        setInputValue('');
      }
    }
}

    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <form>
              <h1 className="text-2xl font-bold mb-4">Update Todo</h1>

              <div>
              Title:
              <input
                  type="text"
                  className="w-full rounded-l py-2 px-4 focus:outline-none bg-[#e7e5e5]"
                  placeholder="Update todo"
                  value={inputValue}  
                  onChange={handleInputChange}
               />
              </div>

              <div className='mt-[1rem]'>
                <p>Status:</p>
                <select
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-l py-2 px-4 focus:outline-none bg-[#e7e5e5]"
                >
                  <option value="Incomplete">Incomplete</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className='mt-[2rem]'>
                <Button onClick={() => handleSubmit()} className='h-[2rem] pt-[0.1rem]'>
                  Update Task
                </Button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );

}

export default UpdateTaskModal;