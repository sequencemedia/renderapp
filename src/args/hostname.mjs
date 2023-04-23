import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:hostname` is awake')

export function hasHostname () {
  info('hasHostname')

  return args.has('hostname')
}

export function getHostname () {
  info('getHostname')

  return args.get('hostname')
}
