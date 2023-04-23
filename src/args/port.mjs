import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:port` is awake')

export function hasPort () {
  info('hasPort')

  return args.has('port')
}

export function getPort () {
  info('getPort')

  return args.get('port')
}
