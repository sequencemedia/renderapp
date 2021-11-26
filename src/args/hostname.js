import debug from 'debug'

import args from '~/src/args'

const log = debug('@sequencemedia')
const info = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:hostname` is awake')

export function hasHostname () {
  info('hasHostname')

  return args.has('hostname')
}

export function getHostname () {
  info('getHostname')

  return args.get('hostname')
}