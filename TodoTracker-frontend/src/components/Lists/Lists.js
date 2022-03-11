import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchLists } from '../../redux/listActions'
import { Link } from "react-router-dom"
import "./Lists.css"

export default function Lists() {
  const lists = useSelector(state => state.lists)
  // replaces mapStateToProps
  const dispatch = useDispatch()
  // replaces mapDispatchToProps

  useEffect(() => {
      dispatch(fetchLists())
  }, [])

      return (
        <div>
            {Array.isArray(lists) && lists.map((list) => {
              return (
                <Link
                  className='list-link'
                  key={list.id}
                  to={`/lists/${list.id}`}
                >
                  <h2>{list.title}</h2>
                </Link>
              )
            })}
        </div>
      )
}
