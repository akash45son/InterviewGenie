import React from 'react'
import {useNavigate,Link} from "react-router"
import { useState } from 'react';
import {useAuth} from '../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading,handleRegister} = useAuth();

    // Handle form submission after submitting the form, we will call the handleRegister function from our useAuth hook and pass the username, email, and password as an object. After the registration process is complete, we will navigate the user to the home page using the navigate function from react-router.
    const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({username,email,password});
    navigate('/');
  }
  // If the loading state is true, we will display a loading message 
  if(loading) {
    return (<main><h1>Loading...</h1></main>)
  }

  return (
     <main>
      <div className="form-container">
        <h2>Register</h2>
        <form  onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="username">Name</label>
            <input 
            onChange={(e) => setUsername(e.target.value)}
            type="text" id="username" name='username' 
            placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            type="email" id="email" name='email' 
            placeholder="Enter Email address" />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type="password" id="password" name='password' 
            placeholder="Enter Password" />
          </div>
          <button className='button primary-button'>Register</button>

        </form>

        <p>Already have an account?  <Link to="/login">Login</Link></p>
      </div>
    </main>
  )
}

export default Register
