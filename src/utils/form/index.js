const getErrorMessage = (error, translateProps) => {
  if (!error) {
    return null
  }

  let message = null
  if (typeof error === 'string') {
    message = error
  }
  if (error?.message) {
    message = error.message
  }
  if (message) {
    const { t, translateParams } = translateProps
    message = t(message, translateParams ? { ...translateParams } : {})
  }
  return message
}

export { getErrorMessage }
