import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  // Getting todo list
  const localTodoList = window.localStorage.getItem('todoList');
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  // if it is empty
  window.localStorage.setItem('todoList', []);
  return [];
};

//Setting the intial value
const initialValue = {
  todoList: getInitialTodo(),
};

// Creating the Slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {

    // Adding new Task to todoList Array
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');   // Getting the todoList from LocalStorage

      if (todoList) {            // If it is not empty then directly adding new task to the existing array
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));   // Updating the local storage with updated todoList Array
      } 
      
      else {             // Else adding the object to empty array
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }

    },

     // Updating the task in the todoList
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList'); // Getting the todoList from LocalStorage
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {       // Searching the particular task based on ID and updating it
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));   // Updating the local storage with updated todoList Array
        state.todoList = [...todoListArr];  // Updating the Redux State
      }
    },

    // Deleting the task in the todo List
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList'); // Getting the todoList from LocalStorage
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {    // Deleting the particular task based on ID
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
