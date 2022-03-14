import React from 'react'
import ListItemForm from './ListItems/ListItemForm'
import List from './Lists/List'
import { useSelector, useDispatch } from "react-redux"
import { deleteList } from '../redux/listActions'
import { useNavigate, useParams } from "react-router-dom"

export default function ListContainer() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const lists = useSelector((state) => state.lists)
    const list = lists.find((list) => list.id == id)
    const navigate = useNavigate()
  

    const handleClick = () => {
      dispatch(deleteList(id))
      navigate("/lists")
    }

  return (
    <div>
      <List list={list}/>
      <ListItemForm list={list}/>
      <br></br>
      <button className='delete-list-button' onClick={handleClick}>Delete List</button>
    </div>
  )
}
