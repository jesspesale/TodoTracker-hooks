import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import List from './Lists/List';

export default function ListItemContainer() {
  let id = useParams();

  const location = useLocation();
  const { list } = location.state;

  return (
    <div>
      <List list={list}/>
    </div>
  );
}
