import React from 'react'

export default function ListItem({item}) {
  return (
    <div>
      <div key={item.id}>
        <li key={item.id}>{item.description}</li>
      </div>
    </div>
  );
}
