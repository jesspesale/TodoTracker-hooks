import React from 'react'
import './App.css'
import "../src/components/Lists/Lists.css"
import "../src/components/ListItems/ListItems.css";
import { Routes, Route } from "react-router-dom"
import Lists from "./components/Lists/Lists"
import ListForm from './components/Lists/ListForm'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ListContainer from './components/ListContainer'
import {useSelector} from "react-redux"


// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         <br></br>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/lists" element={<Lists />} />
//             <Route path="/lists/new" element={<ListForm />} />
//             <Route path="/lists/:id" element={<ListContainer />} />
//           </Routes>
//         </div>
//       </div>
//     )
//   }
// }

// export default App


export default function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <br></br>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/lists/new" element={<ListForm />} />
          <Route path="/lists/:id" element={<ListContainer />} />
        </Routes>
      </div>
    </div>
  );
}
