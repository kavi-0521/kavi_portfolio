import { useEffect, useMemo, useState } from 'react'
import { getPortfolioData } from '../api/portfolioApi'

const emptyData = {
  profile: {},
  navigation: [],
  experiences: [],
  skillGroups: [],
  projects: [],
  contact: {},
}

export const usePortfolioData = () => {
  const [data, setData] = useState(emptyData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        setIsLoading(true)
        const response = await getPortfolioData()
        setData(response)
      } catch {
        setError('Unable to load portfolio data. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    loadPortfolio()
  }, [])

  return useMemo(
    () => ({
      data,
      isLoading,
      error,
    }),
    [data, error, isLoading],
  )
}
