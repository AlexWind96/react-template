import moment from 'moment'
import qs from 'qs'

const paramsSerializer = (params) => {
  return qs.stringify(params, { encode: false })
}

const getMapRequestParams = (params, initialValues = {}) => {
  let requestParams = initialValues

  // eslint-disable-next-line no-prototype-builtins
  if (params.hasOwnProperty('pagination')) {
    requestParams = {
      ...requestParams,
      pagination: params.pagination,
    }
  }

  if (params.type) {
    requestParams = {
      ...requestParams,
      type: params.type,
    }
  }

  if (params.page) {
    requestParams = {
      ...requestParams,
      page: params.page,
    }
  }

  if (params.per_page) {
    requestParams = {
      ...requestParams,
      per_page: params.per_page,
    }
  }

  if (params.sort && Array.isArray(params.sort)) {
    const item = params.sort[0]
    const key = item.id
    const value = item.desc ? 'desc' : 'asc'

    requestParams = {
      ...requestParams,
      sort: {
        [key]: value,
      },
    }
  }

  if (params.filters) {
    Object.entries(params.filters).forEach((entry) => {
      const [key, value] = entry
      if (value !== null && value !== '') {
        requestParams = {
          ...requestParams,
          filters: {
            ...requestParams.filters,
          },
        }

        if (['cities', 'companies'].includes(key)) {
          requestParams.filters[key] = value.map((item) => item.id)
        } else if (['price'].includes(key)) {
          requestParams.filters['price_min'] = value.range[0]
          requestParams.filters['price_max'] = value.range[1]
          requestParams.filters['empty_price'] = value.empty_price
        } else if (['period'].includes(key)) {
          requestParams.filters['date_start'] = moment(value[0]).format('YYYY-MM-DD')
          requestParams.filters['date_end'] = moment(value[1]).format('YYYY-MM-DD')
        } else {
          requestParams.filters[key] = value
        }
      }
    })
  }

  return requestParams
}

export { paramsSerializer, getMapRequestParams }
