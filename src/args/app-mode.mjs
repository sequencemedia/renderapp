import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:app-mode` is awake')

export function hasAppMode () {
  info('hasAppMode')

  return (
    args.has('web') ||
    args.has('dealership')
  )
}

export function getAppMode () {
  info('getAppMode')

  if (args.has('web')) return 'web'
  if (args.has('dealership')) return 'dealership'
}
