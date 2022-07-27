const downloadFileByLink = (src) => {
  if (src) {
    const link = document.createElement('a')
    link.href = src
    link.setAttribute('download', true)
    link.setAttribute('target', '_blank')
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }
}

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export { downloadFileByLink, formatBytes }
