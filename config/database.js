import mongoose from 'mongoose'

// shortcut to mongoose.connection object
const db = mongoose.connection

// Connect to the database
mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})