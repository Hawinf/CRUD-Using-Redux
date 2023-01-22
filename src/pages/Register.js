import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar } from '../components/Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { regisAction } from '../redux/actions/regisAction';

export const Register = () => {
  const {regisReducer} = useSelector(state => state)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    handleRedirect();
  },[regisReducer.message]);

  const handleRedirect = () => {
    // setTimeout untuk membuat delay setelah menampilkan message
    setTimeout(() => {
      if (!!regisReducer.message.length) {
        navigate('/login');
      } 
      // mengkosongkan state message supaya bisa mengakses halaman register
      dispatch ({
        type: 'REMOVE_MESSAGE',
        payload: '',
      });
    }, 2000)
  };

  const inputEmail = (e) => {
      setEmail(e.target.value);
  }

  const inputPassword = (e) => {
      setPassword(e.target.value)
  }

  const handleRegis = () => {
    const payload = {
      email: email,
      password: password,
      role: 'Admin',
    }
    // console.log(payload)
    dispatch(regisAction(payload))
  }

  console.log(regisReducer.message)

  return (
    <div>
        <Navbar />
        <div className='regis-wrapper'>
            <div className='regis-container'>
                <h1>Register Admin</h1>
                <input onChange={inputEmail} placeholder='Email'/>
                <input onChange={inputPassword} placeholder='Password'/>
                <button onClick={handleRegis}>Register</button>
                {regisReducer.message.length ? <h1>{regisReducer.message}</h1> : null}
            </div>
        </div>
    </div>
  )
}
