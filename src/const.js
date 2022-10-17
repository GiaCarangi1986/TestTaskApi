export const PAGE_NAME = {
  getPage: 'getPage',
  postPage: 'postPage',
  deletePage: 'deletePage',
  imagesPage: 'imagesPage'
}

export const PATHS = {
  [PAGE_NAME.getPage]: {
    path: '/',
    exact: false,
  },
  [PAGE_NAME.postPage]: {
    path: '/post',
    exact: false,
  },
  [PAGE_NAME.deletePage]: {
    path: '/delete',
    exact: false,
  },
  [PAGE_NAME.imagesPage]: {
    path: '/images',
    exact: false,
  },
}

export const PARAM_NAME = {
  data: 'data',
  loading: 'loading',
  error: 'error'
}

export const INIT_DATA_RESPONSE = {
  [PARAM_NAME.data]: undefined,
  [PARAM_NAME.loading]: false,
  [PARAM_NAME.error]: undefined
}

export const CONTENT_TYPE = {
  image: 'image',
  json: 'json'
}

const BASE_URL = 'https://httpbin.org/'

export const URL_REQUESTS = {
  get: `${BASE_URL}/get`,
  post: `${BASE_URL}/post`,
  delete: `${BASE_URL}/delete`,
  image: [`${BASE_URL}/image/png`, `${BASE_URL}/image/jpeg`, `${BASE_URL}/image/webp`, `${BASE_URL}/image`]
}
