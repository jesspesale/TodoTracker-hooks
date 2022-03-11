import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchLists } from '../../redux/listActions'
import { Link } from "react-router-dom"

export default function Lists() {
  const lists = useSelector(state => state.lists)
  // replaces mapStateToProps
  const dispatch = useDispatch()
  // replaces mapDispatchToProps

  useEffect(() => {
    if(!lists.length){
      dispatch(fetchLists())
    }
  }, [dispatch, lists])

      return (
        <div>
            {Array.isArray(lists) && lists.map((list) => {
              return (
                <Link
                  key={list.id}
                  to={`/lists/${list.id}`}
                  // list={list}
                  // state={{ list: list }}
                >
                  <h2>{list.title}</h2>
                </Link>
              )

            })}
        </div>
      )
}
