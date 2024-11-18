import express from 'express'
import * as db from '../database/database.js'

let app = express()

let createServer = async () => {
    app.get('/api/settings', async (req, res) => {
        console.log("Settings")
        let settings = await db.getSettings()
        res.send(settings)
    })
    
    app.listen(4000, async() => {
        console.log("Simulation Server running on Port 4000")
    })
}

export {
    createServer
}
