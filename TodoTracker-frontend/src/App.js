import React from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import TodoList from "./components/Lists"
import TodoForm from './components/ListForm';
import Todo from './components/List';
import List from './components/List';


class App extends React.Component {


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
          <Route 
            path="/lists/:id" 
            element={<List />}
            />
        </Routes>
      </div>
    );
  }
}

export default App;
