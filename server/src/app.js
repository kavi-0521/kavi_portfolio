import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import env from './config/env.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import portfolioRoutes from './routes/portfolioRoutes.js'

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: env.clientOrigin,
  }),
)
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is healthy',
  })
})

app.use('/api', portfolioRoutes)
app.use(notFoundHandler)
app.use(errorHandler)

export default app
