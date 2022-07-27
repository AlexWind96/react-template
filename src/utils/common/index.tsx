//
export const isEmpty = (obj: any): boolean =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
