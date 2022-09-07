import React from "react";
import { Routes, Route } from 'react-router-dom';
import Expenses from "./pages/Expenses";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/despesas" element={<Expenses />} />
    </Routes>
  );
}

export default App;
