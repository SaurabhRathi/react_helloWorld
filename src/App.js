import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={"This is Home Page"}></Route>
      </Routes>
    </div>
  );
}

export default App;
