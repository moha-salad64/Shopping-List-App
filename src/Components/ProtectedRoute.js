import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

function ProtectedRoute({ childer }) {

  const [UserCurrent, setUsercurrent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Unuser = onAuthStateChanged(auth, (user) => {
      setUsercurrent(user);
      setLoading(false);
    })
    return () => Unuser();
  }, []);
  if(loading){return <div className='flex justify-center'>Loading...</div>}
  if (!UserCurrent) {
    return <Navigate to='/Login' />
  }
  return (childer);
}

export default ProtectedRoute