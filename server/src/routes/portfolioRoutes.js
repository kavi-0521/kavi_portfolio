import { Router } from 'express'
import {
  getPortfolio,
  submitContactMessage,
} from '../controllers/portfolioController.js'

const router = Router()

router.get('/portfolio', getPortfolio)
router.post('/contact', submitContactMessage)

export default router
