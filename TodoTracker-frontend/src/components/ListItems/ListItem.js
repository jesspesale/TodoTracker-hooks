import React from 'react'
import { deleteListItem } from '../../redux/listActions'
import "../Lists/Lists.css"
import { useDispatch } from "react-redux"

export default function ListItem({item}) {
  const dispatch = useDispatch()

    

    const handleClick = (clickedItem) => {
        console.log(clickedItem)
        // debugger
        dispatch(deleteListItem(clickedItem.list_id, clickedItem.id))
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
