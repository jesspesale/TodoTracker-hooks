import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function ListItemForm() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
//   const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    //   dispatch(createList({ title: title, completed: false }));
    //   setItem("");
    //   navigate("/lists");
  }

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
