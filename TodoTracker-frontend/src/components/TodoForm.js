import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../redux/todoActions";


export default function TodoForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault()
        dispatch(createList({title: title, completed: false}))
        setTitle('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </form>
    </div>
  )
}
