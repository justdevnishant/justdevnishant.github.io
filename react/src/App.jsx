import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './home.jsx';
import Project from './project.jsx';
import Goal from './home/goal.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/goal" element={<Goal/>}/>
      </Routes>
    </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
