import debug from 'debug'

import args from '~/src/args'

const log = debug('@sequencemedia')
const info = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:protocol` is awake')

export function hasProtocol () {
  info('hasProtocol')

  return args.has('protocol')
}

export function getProtocol () {
  info('getProtocol')

  return args.get('protocol')
}
