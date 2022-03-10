import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import ListItemForm from '../ListItems/ListItemForm';


export default function List() {
  let id = useParams();

  const location = useLocation();
  const { list } = location.state;
  // https://ui.dev/react-router-pass-props-to-link

  return (
    <div>
      <h4>{list.title}</h4>
      {list.list_items.map((item) => {
        return (
          <div key={item.id}>
            <li key={item.id}>{item.description}</li>
          </div>
        );  
      })}
      <br></br>
      <ListItemForm />
    </div>
  );
}



  // const dispatch = useDispatch();
  // basically replaces mapDispatchToProps
  // let list = dispatch(getList(id.id));

  // useEffect(() => {
  //   // getList(id.id)
  //   dispatch(getList(id.id));
  // }, []);
