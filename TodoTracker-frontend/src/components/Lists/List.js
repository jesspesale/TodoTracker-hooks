import React from 'react'
import ListItem from '../ListItems/ListItem'
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export default function List({list}) {
    // const { id } = useParams()
    // const lists = useSelector((state) => state.lists)
    // const list = lists.find((list) => list.id == id)
    // console.log(list)

  return (
    <div>
      <h4 className="list-title">{list?.title}</h4>
      {list?.list_items.map((item) => {
        return (
          <div key={item.id}>
            <ListItem item={item} key={item.id} />
          </div>
        )
      })}
      <br></br>
    </div>
  )
}
