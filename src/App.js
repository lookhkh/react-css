import "./App.css";
import Header from "./component/header/Header";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React,{ Suspense } from 'react';
import NavPage from './page/NavPage';

const Loading = React.lazy(()=>import('./component/header/css-practice/Loading'))
const BoxCircle = React.lazy(()=>import("./component/header/css-practice/BoxCircle"));
const InputForm = React.lazy(()=>import("./page/InputForm"));
const SkilCheckForm = React.lazy(()=>import("./page/SkilCheckForm"));

function App() {


 
  return (
    <Router>
      <>
      <nav style={{height:"5vh", display:"flex", justifyContent:"space-around", alignItems:"center", marginBottom:"15vh"}}>
        <Link to="/">Home</Link>
        <Link to="/loading">Loading</Link>
        <Link to="/circle">Circle</Link>
        <Link to="/form">Form</Link>
        <Link to="/skil-form">SkilForm</Link>
      </nav>
      <Suspense fallback={<div>...Loading</div>}>
        <div className="root" style={{height:"95vh"}}>
          <Routes path="/" element={<App />}>
            <Route path="/" element={<NavPage />}/>
            <Route path="/form" element={<InputForm/>}/>
            <Route path="loading" element={<Loading />} />
            <Route path="circle" element={<BoxCircle />} />
            <Route path="/skil-form" element={<SkilCheckForm/>}/>
          </Routes>
        </div>
      </Suspense>
    </>
    </Router>
  );
}

export default App;
