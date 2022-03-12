import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createListItem } from "../../redux/listActions"
import { useNavigate, useHistory, useParams } from "react-router-dom";

export default function ListItemForm({list}) {
  const [item, setItem] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const newList = useSelector((state) => state.lists.find(list => list.id === list.id));

  // const newList = useParams()
  // console.log(newList)

  function handleSubmit(e) {
    e.preventDefault()
    let newItem = {description: item, completed: false, list_id: list.id}
    dispatch(createListItem(newItem, list.id))
    setItem("")
    // navigate(`/lists/${list.id}`)
  }


  return (
    <div>
      <br></br>
      <form className="todo-form" onSubmit={handleSubmit}>
        {/* <label>Add to your list: </label> */}
        <input
          className="todo-input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add to your list"
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
}
