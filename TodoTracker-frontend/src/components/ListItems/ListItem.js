import React from 'react'
import "../Lists/Lists.css"

export default function ListItem({item}) {


    const handleClick = (clickedItem) => {
        console.log(clickedItem);
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
