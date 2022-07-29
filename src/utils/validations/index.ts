import moment from 'moment'

const phoneFormat = (val) => {
  if (val && val !== '') {
    return val.toString() !== '+'
  }
  return true
}

const dateEqualOrAfter = (value, date) => {
  if (value && date) {
    return moment(value).diff(moment(date)) >= 0
  }

  return true
}

const dateAfter = (value, date, measurement, rounded) => {
  if (value && date) {
    return moment(value).diff(moment(date), measurement, rounded) > 0
  }

  return true
}

const setServerSideErrors = (errors, setError) => {
  Object.keys(errors).forEach((key) => {
    setError(key, {
      type: 'server',
      message: errors[key].join('. '),
    })
  })
}

const fileMaxSize = (file, max) => {
  if (file?.size && max) {
    return file?.size <= max
  }

  return true
}

export { phoneFormat, setServerSideErrors, dateEqualOrAfter, fileMaxSize, dateAfter }
