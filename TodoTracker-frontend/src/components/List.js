import React from 'react'
import { Link } from "react-router-dom";

export default function Todo({list}) {
  return (
    <div>
        <h4>{list.title}</h4>
        {/* <Link to={`/lists/${list.id}`}>{list.title}</Link> */}
        {list.list_items.map(item => {
            return <li key={item.id}>{item.description}</li>
        })}
    </div>
  )
}
