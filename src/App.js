import './App.css';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
  var a = 10
  let [num , setnum] = useState(12)
  function update() {
     a++
     setnum(num+1)
  }
  return (
    <div>
      <h1>{a} {num}</h1>
      <button onClick={update}>update</button>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
