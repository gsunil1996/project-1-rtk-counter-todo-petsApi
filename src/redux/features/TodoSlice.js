import { createSlice } from "@reduxjs/toolkit";
import { deleteAllTodo } from "../actions/DeleteAllTodoAction";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        removeTodo(state, action) {
            state.splice(action.payload, 1)
        }
    },
    extraReducers(builder) {
        builder.addCase(deleteAllTodo, () => {
            return []
        })
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer