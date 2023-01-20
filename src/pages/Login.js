import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logisAction } from '../redux/actions/loginAction'
import './Login.css'

export const Login = () => {
    const {loginReducer} = useSelector(state => state)

    // console.log(state)

    const [em, setEm] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const inputEm = (e) => {
        setEm(e.target.value)
    }
    const inputPass = (e) => {
        setPass(e.target.value)
    }
    const handleLogin = () => {
        const payload = {
            email: em,
            password: pass
        }
        dispatch(logisAction(payload))
      }

  return (
    <div>
        <Navbar />
        <div className='login-wrapper'>
            <div className='login-container'>
                <h1>Log In Dulu Ya</h1>
                <input onChange={inputEm} placeholder='Email'/>
                <input onChange={inputPass} placeholder='Password'/>
                <button onClick={handleLogin}>Log In</button>
                {loginReducer.message.length ? <h1>{loginReducer.message}</h1> : null}
            </div>
        </div>
    </div>
  )
}
