import React from 'react'


export default function List({list}) {

  return (
    <div>
      <h4>{list.title}</h4>
      {list.list_items.map((item) => {
        return (
          <div key={item.id}>
            <li key={item.id}>{item.description}</li>
          </div>
        );  
      })}
      <br></br>
    </div>
  );
}
