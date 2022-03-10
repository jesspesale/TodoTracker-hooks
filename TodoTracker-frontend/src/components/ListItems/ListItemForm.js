import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createListItem } from "../../redux/listActions";
// import { useNavigate } from "react-router-dom";

export default function ListItemForm({list}) {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
//   const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    let newItem = {description: item, completed: false, list_id: list.id}
    dispatch(createListItem(newItem, list.id))
    //   setItem("");
  }
  //   navigate("/lists");
  //   dispatch(createList({ title: title, completed: false }));

  return (
    <div>
        <br></br>
      <form onSubmit={handleSubmit}>
        <label>Add to your list: </label>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
      </form>
    </div>
  );
}
