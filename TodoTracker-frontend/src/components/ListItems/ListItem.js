import React, {useState} from 'react'
import { deleteListItem, editListItem } from '../../redux/listActions'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import {BsTrash} from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

export default function ListItem({item}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [edit, setEdit] = useState(false)
  const [newItem, setNewItem] = useState(item.description)
    

    const handleDelete = (clickedItem) => {
        const listId = clickedItem.list_id
        dispatch(deleteListItem(listId, clickedItem.id))
        navigate(`/lists/${listId}`)
    }

    const handleEdit = () => {
      setEdit(true)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      item.description = newItem
      dispatch(editListItem(item.list_id, item))
      setEdit(false)
    }

    const completeTodo = () => {
      item.completed = !item.completed
      dispatch(editListItem(item.list_id, item))
      navigate(`/lists/${item.list_id}`);
    }

    if(edit){
      return (
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            className="input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Edit your list"
          />
        </form>
      )
    }

  return (
    <div className="list-item">
      <div 
        className={item.completed ? "item-row completed" : "item-row" }
        onClick={completeTodo}
      >
        {item.description}
      </div>
      <BsTrash className="delete-icon" onClick={() => handleDelete(item)} />
      <FiEdit className="edit-icon" onClick={(e) => handleEdit(e)}/>
    </div>
  )
}
