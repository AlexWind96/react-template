const setServerSidePage = (meta, setPage) => {
  const { current_page, last_page } = meta
  if (current_page && last_page && current_page > last_page) {
    setPage(last_page)
  }
}

export { setServerSidePage }
