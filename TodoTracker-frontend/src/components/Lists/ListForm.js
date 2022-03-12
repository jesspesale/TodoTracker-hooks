import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createList } from "../../redux/listActions"
import { useNavigate } from "react-router-dom"
import "./Lists.css"


export default function ListForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        dispatch(createList({ title: title, completed: false }))
        setTitle('')
        navigate('/lists')
    }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={title}
          className="todo-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  )
}
