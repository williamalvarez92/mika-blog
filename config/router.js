import express from 'express'
import { getSingleArticle, getAllArticles, createArticle, deleteArticle, updateArticle  } from '../controllers/articles.js'
import { registerUser, loginUser, getUser, getUsers } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/users')
  .get(getUsers)

router.route('/user')
  .get(secureRoute, getUser)

router.route('/articles') 
  .get(getAllArticles)
  .post(secureRoute, createArticle)

router.route('/article/:id')
  .get(getSingleArticle)  
  .delete(secureRoute, deleteArticle) 
  .put(updateArticle)

// ~~~~~~~~~

router.route('/login')
  .post(loginUser)

router.route('/register')
  .post(registerUser)

  
export default router