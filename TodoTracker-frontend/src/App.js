import React from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Lists from "./components/Lists/Lists"
import ListForm from './components/Lists/ListForm';
import Home from './components/Home';
// import List from './components/Lists/List';
import Navbar from './components/Navbar';
import ListContainer from './components/ListContainer';


class App extends React.Component {


  render(){
    return (
      <div className="App">
        <Navbar/>
        <br></br>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/lists/new" element={<ListForm />} />
          <Route path="/lists/:id" element={<ListContainer />} />
        </Routes>
      </div>
    );
  }
}

export default App;
