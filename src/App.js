import "./App.css";
import ErrorBoundary from "./component/header/ErrorBoundaryForComponent";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React,{ Suspense } from 'react';
import NavPage from './page/NavPage';
import Loading from './component/header/css-practice/Loading'
import SidePage from "./page/SidePage";

const BoxCircle = React.lazy(()=>import("./component/header/css-practice/BoxCircle"));
const InputForm = React.lazy(()=>import("./page/InputForm"));
const SkilCheckForm = React.lazy(()=>import("./page/SkilCheckForm"));
const Calculator = React.lazy(()=>import('./page/Calculator'))
const Hamburger = React.lazy(()=>import("./page/Hamburger"))

function App() {


 
  return (
    <Router>
      <>
      <nav style={{height:"5vh", display:"flex", justifyContent:"space-around", alignItems:"center", marginBottom:"15vh"}}>
        <Link to="/">Home</Link>
        <Link to="/circle">Circle</Link>
        <Link to="/form">Form</Link>
        <Link to="/skil-form">SkilForm</Link>
        <Link to="/calc">Calculator</Link>
        <Link to="/ham">Hamburger</Link>
        <Link to="/side">SideBard</Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <div className="root" style={{height:"95vh"}}>
          <ErrorBoundary >
            <Routes path="/" element={<App />}>
              <Route path="/" element={<NavPage />}/>
              <Route path="/form" element={<InputForm/>}/>
              <Route path="circle" element={<BoxCircle />} />
              <Route path="/skil-form" element={<SkilCheckForm/>}/>
              <Route path="/calc" element={<Calculator/>}/>
              <Route path="/ham" element={<Hamburger/>}/>
              <Route path="/side" element={<SidePage/>}/>
            </Routes>
          </ErrorBoundary>
        </div>
      </Suspense>
    </>
    </Router>
  );
}

export default App;
