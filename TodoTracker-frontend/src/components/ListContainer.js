import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import ListItemForm from './ListItems/ListItemForm';
import List from './Lists/List';
import { useSelector } from 'react-redux';

export default function ListContainer() {
  // const location = useLocation();
  // const { list } = location.state;
    const { id } = useParams();
    const lists = useSelector((state) => state.lists);
    const list = lists.find((list) => list.id == id);


  return (
    <div>
      <List list={list}/>
      <ListItemForm list={list}/>
    </div>
  );
}
