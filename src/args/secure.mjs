import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:secure` is awake')

export function hasSecure () {
  info('hasSecure')

  return args.has('secure')
}

export function getSecure () {
  info('getSecure')

  return args.get('secure')
}
