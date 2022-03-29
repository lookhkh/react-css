import "./App.css";
import Header from "./component/header/Header";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loading  from './component/header/css-practice/Loading'
import BoxCircle from "./component/header/css-practice/BoxCircle";


function App() {

 
  return (
    <Router>
    <>
    <nav style={{height:"5vh", display:"flex", justifyContent:"space-around", alignItems:"center", marginBottom:"15vh"}}>
      <Link to="/">Home</Link>
      <Link to="/loading">Loading</Link>
      <Link to="/circle">Circle</Link>
    </nav>
    <div style={{height:"95vh"}}>
      <Routes path="/" element={<App />}>
        <Route path="loading" element={<Loading />} />
        <Route path="circle" element={<BoxCircle />} />
      </Routes>
      
    </div>
    </>
    </Router>
  );
}

export default App;
