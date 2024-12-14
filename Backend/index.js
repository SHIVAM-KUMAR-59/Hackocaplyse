import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI // Ensure this is set in your .env file

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
;(async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Successfully Connected to Database')
  } catch (error) {
    console.error('Error Connecting to Database:', error)
    process.exit(1) // Exit the process if connection fails
  }
})()

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
