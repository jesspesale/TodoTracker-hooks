import React from 'react'
import "../Lists/Lists.css"

export default function ListItem({item}) {
  return (
      <div className='list-item'>
          <div>
            <li>{item.description}</li>
          </div>
        <button className='li-delete-button'>X</button>
      </div>
  );
}
