/**
 * @param imgRef - HTML img object
 * @param {Object} crop - crop Object
 */
export function getCroppedCanvas(imgRef, crop) {
  const canvas = document.createElement('canvas')
  const image = imgRef.current
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  const ctx = canvas.getContext('2d')
  const pixelRatio = window.devicePixelRatio

  canvas.width = crop.width * pixelRatio * scaleX
  canvas.height = crop.height * pixelRatio * scaleY

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  ctx.imageSmoothingQuality = 'high'

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width * scaleX,
    crop.height * scaleY
  )

  return canvas
}

export const canvasToBlobFile = (canvas, fileName = 'name.jpeg', fileType = 'image/jpeg') => {
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        blob.name = fileName
        resolve(blob)
      },
      fileType,
      //reduce the quality of file  - 0.5
      0.5
    )
  })
}
