const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const readJson = async (response) => {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

export const getPortfolioData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/portfolio`)
  const payload = await readJson(response)
  return payload.data
}

export const sendContactMessage = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  return readJson(response)
}
