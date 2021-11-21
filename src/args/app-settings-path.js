import args from '~/src/args'

export function hasAppSettingsPath () {
  return args.has('appSettingsPath')
}

export function getAppSettingsPath () {
  return args.get('appSettingsPath')
}
