import debug from 'debug'

import args from '~/src/args'

const log = debug('@sequencemedia')
const info = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:app-settings-path` is awake')

export function hasAppSettingsPath () {
  info('hasAppSettingsPath')

  return args.has('appSettingsPath')
}

export function getAppSettingsPath () {
  info('getAppSettingsPath')

  return args.get('appSettingsPath')
}
