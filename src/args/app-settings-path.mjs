import debug from 'debug'

import args from '#args'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:args')

log('`@sequencemedia/renderapp:app-settings-path` is awake')

export function hasAppSettingsPath () {
  info('hasAppSettingsPath')

  return args.has('appSettingsPath')
}

export function getAppSettingsPath () {
  info('getAppSettingsPath')

  return args.get('appSettingsPath')
}
