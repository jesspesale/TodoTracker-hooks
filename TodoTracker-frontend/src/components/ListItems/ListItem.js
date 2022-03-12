import React from 'react'
import { deleteListItem } from '../../redux/listActions'
import "../Lists/Lists.css"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

export default function ListItem({item}) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    

    const handleClick = (clickedItem) => {
        const listId = clickedItem.list_id
        dispatch(deleteListItem(listId, clickedItem.id))
        navigate(`/lists/${listId}`);
    }

  return (
      <div className='list-item'>
          <div>
            <li>{item.description}</li>
          </div>
        <button 
            className='li-delete-button'
            onClick={() => handleClick(item)}
        >X</button>
      </div>
  );
}
