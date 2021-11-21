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
  const APPMODE = appMode.toLowerCase()

  return function matchFor ({ AppMode = '' }) {
    return (
      AppMode.toLowerCase() === APPMODE
    )
  }
}

function hasSettingsForAppMode ({ Settings = [] } = {}, appMode = 'web') {
  info('hasSettingsForAppMode')

  return (
    Settings.some(matchFor(appMode))
  )
}

function getSettingsForAppMode ({ Settings = [] } = {}, appMode = 'web') {
  info('getSettingsForAppMode')

  return (
    Settings.find(matchFor(appMode))
  )
}

if (!hasAppSettingsPath()) throw new Error('App Settings path not provided')
const APP_SETTINGS_PATH = getAppSettingsPath()
const APP_SETTINGS = JSON.parse(readFileSync(APP_SETTINGS_PATH))

export {
  hasSettingsForAppMode,
  getSettingsForAppMode
}

export {
  APP_SETTINGS_PATH
}
export default APP_SETTINGS
