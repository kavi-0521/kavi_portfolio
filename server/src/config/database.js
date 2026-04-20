import mongoose from 'mongoose'

const connectDatabase = async (mongoUri) => {
  if (!mongoUri) {
    console.warn('MONGODB_URI is missing. Running with in-memory seed data only.')
    return
  }

  await mongoose.connect(mongoUri)
  console.log('MongoDB connected')
}

export default connectDatabase
