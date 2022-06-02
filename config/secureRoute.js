
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import dotenv from 'dotenv'
dotenv.config()
const SECRET = process.env.SECRET

export const secureRoute = async (req, res, next) => {
  try {

    if (!req.headers.authorization) throw new Error('Missing headers')

    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, SECRET)
    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) throw new Error('User not found')
    req.currentUser = userToVerify
    next()

  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}