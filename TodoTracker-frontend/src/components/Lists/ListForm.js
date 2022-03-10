import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../redux/listActions";
import { useNavigate } from "react-router-dom";


export default function ListForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault()
        dispatch(createList({ title: title, completed: false }))
        setTitle('')
        navigate('/lists')
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
