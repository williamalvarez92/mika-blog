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
<div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div className="box bubble"> 
        <div className="type-writer-text">
        会計士 in ロンドンです。 私のブログへようこそ!
        </div>
    </div>
    </div>
	<ImgMediaCard id='article-card' articles={allArticles}/>
</div>
);
}

export default MainPage;
