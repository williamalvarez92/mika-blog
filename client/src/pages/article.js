import React, { useState, useEffect } from 'react'
import { getTokenFromLocalStorage, userIsAuthenticated } from '../helpers/auth.js'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Article = () => {

  const { id } = useParams()
  const [ article, setArticle ] = useState([])
 
useEffect(() => {
  const getArticle = async() => {
    try{
  const { data } = await axios.get(`/api/article/${id}`)
  setArticle(data)
} catch(e){console.log(e)}}
getArticle()
}, [id])

 const shortDate = (d) => {
   if(d){
     return d.slice(0,10)}
 }

  return(
    <>
    {article &&
  <div className='article-page'> 
  <h2>{article.title}</h2>
  <div><span>{shortDate(article.createdAt)}</span><span>{article.tag}</span></div>
  <p>{article.text}</p>
  </div>}
    </>
)

}

export default Article
