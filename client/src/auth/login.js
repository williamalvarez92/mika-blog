import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from '../helpers/auth';

const Login = () => {

  // History
  let navigate = useNavigate();

  // State
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
      setTokenToLocalStorage(data.token)
      
      navigate('/AdminPage', { replace: true });

    } catch (err) {
      console.log('here')
    }
  }

  return (
    <div className="loginPage">
          <form onSubmit={handleSubmit}>
            <h3>ADMIN LOGIN</h3>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input onInput={handleChange} type="email" name="email" placeholder="Email" value={formData.email}/>
            </div>
            <div className="form-field">
              <label htmlFor="password" >Password</label>
              <input onInput={handleChange} type="password" name="password" placeholder="Password" value={formData.password} />
            </div>
            <button id="logBtn">Login</button>
          </form>
    </div>
  )
}

export default Login