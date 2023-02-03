import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <a>Homepage</a>
        </Link>
        <Link to='/login'>
            <a>Login</a>
        </Link>
        <Link to='/register'>
            <a>Register</a>
        </Link>
        <Link to='/discovery'>
            <a>Discover</a>
        </Link>
        <Link to='/car-list'>
            <a>Car List</a>
        </Link>
    </div>
  )
}
