import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchLists } from '../redux/listActions';
// import List from './List';
import { Link } from "react-router-dom";

export default function Lists() {
  const todos = useSelector(state => state.lists);
  // basically replaces mapStateToProps
  const dispatch = useDispatch()
  // basically replaces mapDispatchToProps

  useEffect(() => {
    dispatch(fetchLists())
  }, [])

  // console.log(todos)

  return (
  <div>
    <h2>Your Lists</h2>
    {todos && todos.map(list => {
      return <Link to={`/lists/${list.id}`}>{list.title}</Link>;
      // <LIST list={list} key={list.id}/>
    })}
  </div>
  )
}
