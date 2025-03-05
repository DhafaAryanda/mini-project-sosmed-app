import axios from 'axios'

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.error('AXIOS ERROR DETAILS:', {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
    })

    return (
      error.response?.data?.message ||
      error.response?.data?.error ||
      `Error: ${error.response?.status}`
    )
  }

  if (error instanceof Error) {
    console.error('STANDARD ERROR:', error.message)
    return error.message
  }

  console.error('UNKNOWN ERROR:', error)
  return 'An unexpected error occurred'
}
