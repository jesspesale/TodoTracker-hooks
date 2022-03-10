import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import ListItemForm from './ListItems/ListItemForm';
import List from './Lists/List';

export default function ListContainer() {
  const location = useLocation();
  const { list } = location.state;

  return (
    <div>
      <List list={list}/>
      <ListItemForm list={list}/>
    </div>
  );
}
