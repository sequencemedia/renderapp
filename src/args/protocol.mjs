import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:protocol` is awake')

export function hasProtocol () {
  info('hasProtocol')

  return args.has('protocol')
}

export function getProtocol () {
  info('getProtocol')

  return args.get('protocol')
}
