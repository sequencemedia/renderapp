import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:cache-path` is awake')

export function hasCachePath () {
  info('hasCachePath')

  return args.has('cachePath')
}

export function getCachePath () {
  info('getCachePath')

  return args.get('cachePath')
}
