import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';


function SingUp() {

  //create form fields states
  const [email, setEmial] = useState('');
  const [password, setPassword] = useState('')
 
  const Navbar = useNavigate();

  //create Loading
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email && !password)
      return;

    //start Loading
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success("User creation Successfully")
      Navbar("/");
      // console.log("user is registered!");

    } catch (error) {
      toast.error('something want wrong!');
      // console.log('this user already exist');
    }finally{
      setEmial("")
      setPassword("");
      setLoading(false);
    }
    
  }


  return (
    <div className='signIn-container'>
      <h1>Sign Up</h1>
      <form className='frm-container' onSubmit={handleSubmit}>
        <div className='input-sign'>
          <label>Email</label>
          <input type='text' placeholder='username'
            value={email}
            onChange={(e) => setEmial(e.target.value)} />
        </div>
        <div className='input-sign'>
          <label>Password</label>
          <input type='password' placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='btn-sign'>
          <button type='submit' className='btn'>
            <span>
              {loading ? <Loader /> : "Sign Up"}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SingUp