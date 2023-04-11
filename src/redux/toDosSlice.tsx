import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ToDo {
    id: string;
    name: string;
  }

  interface ToDosState {
    items: ToDo[];
  }

  const initialState: ToDosState = {
    items: [
      {id: 'abc',
    name: 'placeholder item'}
    ],
  };

export const toDosSlice = createSlice({
    name: "toDos",
    initialState,
    reducers:{
        addToDo: (state, action)=>{
            const newToDo: ToDo = {
                id: uuidv4(),
                name: action.payload.toDo
            }
            state.items.push(newToDo);
        },
        deleteToDo: (state, action)=>{
         state.items= state.items.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addToDo, deleteToDo} = toDosSlice.actions;

export default toDosSlice.reducer;