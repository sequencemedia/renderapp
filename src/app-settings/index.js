import debug from 'debug'

import {
  readFileSync
} from 'fs'

import {
  hasAppSettingsPath,
  getAppSettingsPath
} from '~/src/args/app-settings-path'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:app-settings')

log('`@sequencemedia/renderapp:app-settings` is awake')

function matchFor (appMode = '') {
  const APP_MODE = appMode.toLowerCase()

  return function matchFor ({ AppMode = '' }) {
    return (
      AppMode.toLowerCase() === APP_MODE
    )
  }
}

function hasAppSettingsForAppMode ({ Settings = [] } = {}, appMode = 'web') {
  info('hasAppSettingsForAppMode')

  return (
    Settings.some(matchFor(appMode))
  )
}

function getAppSettingsForAppMode ({ Settings = [] } = {}, appMode = 'web') {
  info('getAppSettingsForAppMode')

  return (
    Settings.find(matchFor(appMode))
  )
}

if (!hasAppSettingsPath()) throw new Error('App Settings path not provided')
const APP_SETTINGS_PATH = getAppSettingsPath()
const APP_SETTINGS = JSON.parse(readFileSync(APP_SETTINGS_PATH))

export {
  hasAppSettingsForAppMode,
  getAppSettingsForAppMode
}

export {
  APP_SETTINGS_PATH
}
export default APP_SETTINGS
