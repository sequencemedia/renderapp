import debug from 'debug'

import {
  hasCachePath,
  getCachePath
} from '#args/cache-path'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:cache-path` is awake')

if (!hasCachePath()) throw Error('Cache Path not provided')
const CACHE_PATH = getCachePath()

export default CACHE_PATH
