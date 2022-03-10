import React, {useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { getList } from '../redux/listActions';
import { useSelector, useDispatch } from "react-redux";

export default function List() {

  let id = useParams()

    const location = useLocation();
    const { list } = location.state;
    console.log(list)

  return (
    <div>
        <h4>{list.title}</h4>
        {list.list_items.map(item => {
            return <li key={item.id}>{item.description}</li>
        })}
    </div>
  )
}



  // const dispatch = useDispatch();
  // basically replaces mapDispatchToProps
  // let list = dispatch(getList(id.id));

  // useEffect(() => {
  //   // getList(id.id)
  //   dispatch(getList(id.id));
  // }, []);
