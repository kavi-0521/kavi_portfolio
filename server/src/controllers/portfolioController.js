import ApiError from '../utils/ApiError.js'
import portfolioData from '../data/portfolioData.js'

export const getPortfolio = (req, res) => {
  res.status(200).json({
    success: true,
    data: portfolioData,
  })
}

export const submitContactMessage = (req, res, next) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return next(new ApiError(400, 'Name, email, and message are required'))
  }

  res.status(201).json({
    success: true,
    message: 'Message received. I will get back to you within 24 hours.',
  })
}
