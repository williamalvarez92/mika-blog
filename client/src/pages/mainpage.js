import avatar from '../avatar1.png';
import '../styles/mainpage.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getTokenFromLocalStorage } from '../helpers/auth';

function MainPage() {
const [ allArticles, setArticles ] = useState([])

useEffect(() => {
    const getData = async () => {
        try {
        const { data } = await axios.get(
            'http://localhost:4000/api/allarticles'
        )
            setArticles(data)
        } catch (error) {
        console.log(error)
        }
    }
    getData()
    }, [])
console.log(allArticles)


return (
<div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div class="box bubble"> 
        <div class="type-writer-text">
        会計士 in ロンドンです。 私のブログへようこそ!
        </div>

    </div>
    </div>
</div>
);
}

export default MainPage;