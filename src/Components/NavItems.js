// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import SignUp from '../Pages/SingUp';
import Login from '../Pages/Login';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<ProtectedRoute element={Home} />} />
                <Route path="/about" element={<ProtectedRoute element={About} />} />
                <Route path="/contact" element={<ProtectedRoute element={Contact} />} />
            </Routes>
        </Router>
    );
};

export default App;
