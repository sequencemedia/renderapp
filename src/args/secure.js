import debug from 'debug'

import args from '~/src/args'

const log = debug('@sequencemedia')
const info = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:secure` is awake')

export function hasSecure () {
  info('hasSecure')

  return args.has('secure')
}

export function getSecure () {
  info('getSecure')

  return args.get('secure')
}
