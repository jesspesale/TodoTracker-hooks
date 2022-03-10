import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchLists } from '../redux/listActions';
import List from './List';
import { FETCH_LISTS } from '../redux/constants';
import { Link } from "react-router-dom";

export default function Lists() {
  const lists = useSelector(state => state.lists);
  // basically replaces mapStateToProps
  const dispatch = useDispatch()
  // basically replaces mapDispatchToProps


  useEffect(() => {
    dispatch(fetchLists())
  }, []);

console.log(lists)


      return (
        <div>
            {lists.map((list) => {
              return(
                <Link key={list.id} to={`/lists/${list.id}`} list={list}>{list.title}</Link>

                // <List list={list} key={list.id} />;
              )

            })}
        </div>
      );
}
