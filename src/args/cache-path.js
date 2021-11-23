import debug from 'debug'

import args from '~/src/args'

const log = debug('@sequencemedia')
const info = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:cache-path` is awake')

export function hasCachePath () {
  info('hasCachePath')

  return args.has('cachePath')
}

export function getCachePath () {
  info('getCachePath')

  return args.get('cachePath')
}
