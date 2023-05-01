import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTodo } from '../redux/actions/DeleteAllTodoAction';
import { addTodo, removeTodo } from '../redux/features/TodoSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todo);
    // console.log("todoSlice", data)
    const [text, setText] = useState("");

    const handleAddTodo = (payload) => {

        dispatch(addTodo(payload))
        setText("")
    }

    const handleDeleteTodo = (index) => {
        dispatch(removeTodo(index))
    }

    const clearTodo = () => {
        dispatch(deleteAllTodo())
    }

    return (
        <div>
            <h1>Todo</h1>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => handleAddTodo(text)} >Add</button>
            <button style={{ marginLeft: "10px" }} onClick={clearTodo} >Delete All Users</button>
            <div>
                {data.map((item, index) => {
                    return (
                        <div key={index} style={{ marginTop: "5px" }} >
                            {item}
                            <button
                                style={{ marginLeft: "10px" }}
                                onClick={() => handleDeleteTodo(index)}
                            >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo