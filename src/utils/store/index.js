const updateObjectInArrayById = (array, payload) => {
  return array.map((item) => {
    if (item.id !== payload.id) {
      return item
    }

    return {
      ...item,
      ...payload.data,
    }
  })
}

export { updateObjectInArrayById }
