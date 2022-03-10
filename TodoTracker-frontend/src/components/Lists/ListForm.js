import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../redux/listActions";
import { useNavigate, useHistory } from "react-router-dom";



export default function ListForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        let lists = dispatch(createList({title: title, completed: false}))
        console.log(lists)
        history.push("/lists")
        // navigate('/lists')
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
