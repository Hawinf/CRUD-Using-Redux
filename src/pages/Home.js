import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar'
import { handleLogout } from '../redux/actions/loginAction';

export const Home = () => {
  const loginReducer = useSelector((state) => state);
  const [token, setToken] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, [])

  const onLogout = () => {
    dispatch(handleLogout())
  }
  

  return (
    <div>
        <Navbar />
        <h1>This Is Homepage</h1>
        {token != null ? <button onClick={onLogout}>Log Out</button> : null}
    </div>
  )
}
