import React from 'react'
import { Link } from "react-router-dom";

export default function Todo({todo}) {
  return (
    <div>
        <h4>{todo.title}</h4>
        {/* <Link to={`/todos/${todo.id}`}>{todo.title}</Link> */}
        {todo.list_items.map(item => {
            return <li key={item.id}>{item.description}</li>
        })}
    </div>
  )
}
