import avatar from '../avatar1.png';
import '../styles/mainpage.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImgMediaCard from '../components/articleCard';


function MainPage() {
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


return (
    <>
<div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div className="box bubble"> 
        <div className="type-writer-text">
        <span>Hello there and welcome to my blog!</span>
        </div>
    </div>
    </div>
    <div className='home-nav'>
        <a href='a'>Study</a>
        <a href='a'>Personal finance</a>
        <a href='a'>Life in the UK</a>
    </div>
</div>
<ImgMediaCard id='article-card' articles={allArticles}/>
</>
);
}

export default MainPage;
