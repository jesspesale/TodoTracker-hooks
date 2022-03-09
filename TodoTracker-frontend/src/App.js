import React from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import TodoList from "./components/Lists"
import TodoForm from './components/ListForm';
import Todo from './components/List';


class App extends React.Component {

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/lists/1")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  render(){
    return (
      <div className="App">
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/lists" className="nav">
          All Lists
        </Link>
        <Link to="/lists/new" className="nav">
          Create a new List
        </Link>
        <br></br>
        <Routes>
          <Route path="/lists" element={<TodoList />} />
          <Route path="/lists/new" element={<TodoForm />} />
          {/* <Route path="/todos/:id" element={<Todo />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
