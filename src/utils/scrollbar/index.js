export const isCloseToBottom = (e, threshold) => {
  return e.scrollHeight - e.scrollTop <= e.clientHeight + threshold
}

export const isCloseToTop = (e, threshold) => {
  return e.scrollTop <= threshold
}

/**
 * target - target to scroll to (DOM element, scrollTop Number, 'top', or 'bottom')
 * containerEl - DOM element for the container with scrollbars
 * source: https://stackoverflow.com/a/48429314
 */
export const scrollToTarget = (target, containerEl) => {
  const isElement = target && target.nodeType === 1
  const isNumber = Object.prototype.toString.call(target) === '[object Number]'

  let scrollTop
  if (isElement) scrollTop = target.offsetTop
  else if (isNumber) scrollTop = target
  else if (target === 'top') scrollTop = 0
  else if (target === 'bottom') scrollTop = containerEl.scrollHeight - containerEl.offsetHeight

  if (scrollTop !== undefined) containerEl.scrollTop = scrollTop
}
