import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import SignUp from '../Pages/SingUp';
import Login from '../Pages/Login';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return(
    <Router>
    <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                  }/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
  )
}

export default App
