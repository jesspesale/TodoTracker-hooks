import React from 'react'
import { deleteListItem } from '../../redux/listActions'
import "../Lists/Lists.css"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import {BsTrash} from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

export default function ListItem({item}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    

    const handleClick = (clickedItem) => {
        const listId = clickedItem.list_id
        dispatch(deleteListItem(listId, clickedItem.id))
        navigate(`/lists/${listId}`)
    }

  return (
    <div className="list-item">
      <div className="item-row">{item.description}</div>
      <BsTrash className="delete-icon" onClick={() => handleClick(item)} />
      <FiEdit className="edit-icon" />
    </div>
  );
}
