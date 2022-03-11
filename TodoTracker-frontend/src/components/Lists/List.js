import React from 'react'
import ListItem from '../ListItems/ListItem';

export default function List({list}) {

  return (
    <div>
      <h4>{list.title}</h4>
      {list.list_items.map((item) => {
        return (
          <div key={item.id}>
            <ListItem item={item} key={item.id} />
          </div>
        );  
      })}
      <br></br>
    </div>
  );
}
