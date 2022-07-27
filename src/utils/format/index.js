const formatPhone = (value) => {
  if (!value) {
    return value
  }

  let prefix = '+'

  const firstCh = value[0]
  if (firstCh === prefix) {
    prefix = ''
  }

  return prefix + value
}

const formatNumberToCompact = (num, digits = 1) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/

  let item = lookup.reverse().find(function (item) {
    return num >= item.value
  })

  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0'
}

export { formatPhone, formatNumberToCompact }
