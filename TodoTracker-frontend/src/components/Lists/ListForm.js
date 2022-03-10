import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../../redux/listActions";
import { useNavigate } from "react-router-dom";



export default function ListForm() {
    const [title, setTitle] = useState('')
    const lists = useSelector((state) => state.lists);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault()
        console.log(dispatch(createList({ title: title, completed: false })));
        // dispatch(createList({title: title, completed: false}))
        navigate('/lists')
        // <Navigate to="/lists" />
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
