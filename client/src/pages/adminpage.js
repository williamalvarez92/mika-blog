import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userIsAuthenticated } from '../helpers/auth';
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';

const AdminPage = () => {

const [ allArticles, setArticles ] = useState([])

useEffect(() => {
    const getData = async () => {
        try {
        const { data } = await axios.get(
            '/api/articles'
        )
            setArticles(data)
        } catch (error) {
        console.log(error)
        }
    }
    getData()
    }, [])


      // History
    let navigate = useNavigate();

    // State
    const [ formData, setFormData ] = useState({
        title: '',
        text: '',
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
        const { data } = await axios.post('/api/articles', formData,
        
        )
        setTokenToLocalStorage(data.token)
        
        navigate('/blog', { replace: true });

        } catch (err) {
        console.log(err)
        }
    }

    return (
        <>
        {userIsAuthenticated() &&
        <div className="adminpage">
            <div className='admin-data'>
                <div>a</div>
                <div>a</div>
            </div>
        <div className='addArticlePage'>
        <form onSubmit={handleSubmit}>
            <h3>ADD NEW ARTICLE</h3>
            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input onInput={handleChange} type="text" name="title" placeholder="Title..." value={formData.title}/>
            </div>
            <div className="form-field">
                <label htmlFor="text">Article</label>
                <textarea onInput={handleChange}   type="text"  name="text" placeholder="Write your article..." value={formData.text} />
            </div>
            <button id="logBtn">Post it!</button>
        </form>
        </div>
        </div>
        }
        </>
    )
}

export default AdminPage