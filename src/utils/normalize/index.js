const phone = (value) => {
  if (!value) {
    return value
  }

  let prefix = '+'

  const firstCh = value[0]

  if (value.length > 0 && firstCh !== '+') {
    prefix = '+'
  }

  return prefix + value.replace(/[^\d]/g, '')
}

const numberToBoolean = (value) => {
  if (value === 0 || value === '0') {
    return false
  }

  if (value === 1 || value === '1') {
    return true
  }

  return value
}

const stringBoolToBoolean = (value) => {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  return value
}

const toNumber = (value) => {
  if (!value) {
    return value
  }

  return Number(value)
}

const onlyNumbers = (value) => {
  value = value.replace(/[^0-9]/g, '') // Remove all chars except numbers

  return value.replace(/ /g, '')
}

const onlyDecimal = (value, amountDigit = 1) => {
  value = value.replace(/[^0-9.]/g, '') // Remove all chars except numbers and .

  // Create an array with sections split by .
  const sections = value.split('.')

  // Remove any leading 0s apart from single 0
  if (sections[0] !== '0' && sections[0] !== '00') {
    sections[0] = sections[0].replace(/^0+/, '')
  } else {
    sections[0] = '0'
  }

  // If numbers exist after first .
  if (sections[1]) {
    // Join first two sections and truncate end section to length {amountDigit}
    return sections[0] + '.' + sections[1].slice(0, amountDigit)
    // If original value had a decimal place at the end, add it back
  } else if (value.indexOf('.') > 0) {
    // value.indexOf('.') !== -1
    return sections[0] + '.'
    // Otherwise, return only section
  } else {
    return sections[0]
  }
}

export { phone, numberToBoolean, stringBoolToBoolean, toNumber, onlyNumbers, onlyDecimal }
