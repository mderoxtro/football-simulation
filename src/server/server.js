import express from 'express'
import cors from 'cors'
import * as db from '../database/database.js'

let app = express()
app.use(express.json())
app.use(
    cors({
        origin: "*"
    })
)

let createServer = async () => {
    app.get('/api/settings', async (req, res) => {
        let settings = await db.getSettings()
        res.send(settings)
    })

    app.post('/api/settings', async (req, res) => {
        let settings = await db.setSettings(req.body)
        res.send(settings)
    })
    
    app.listen(4000, async() => {
        console.log("Simulation Server running on Port 4000")
    })
}

export {
    createServer
}
