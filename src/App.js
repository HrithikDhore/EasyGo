import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
