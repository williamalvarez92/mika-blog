import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import router from './config/router.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()

const DB_URI = process.env.DB_URI
const HOST = process.env.HOST
const PORT = process.env.PORT

const startServer = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('Database has connected successfully')

        app.use(express.json())
        app.use('/api', router)
        
        app.use(express.static(path.join(__dirname, 'client', 'build')))

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
        })
        app.use((req, _res, next) => {
            console.log(`Request received: ${req.method} - ${req.url}`)
            next()
        })

        app.use((_req, res) => {
            return res.status(404).json({ message: 'Path not found' })
        })

        const server = app.listen(PORT, HOST, () => console.log(`🚀 Server up and running on http://${HOST}:${PORT}`))
        server.timeout = 1000

    } catch (err) {
        console.log('Something went wrong - couldnt connect')
        console.log(err)
    }
}

startServer()
