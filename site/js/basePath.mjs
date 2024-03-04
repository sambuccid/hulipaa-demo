export const BASE_PATH = "/hulipaa-demo"
export const BASE_PATH_TRAILING_SLASH = BASE_PATH + '/'

export function withBasePath(url) {
  return BASE_PATH + url
}