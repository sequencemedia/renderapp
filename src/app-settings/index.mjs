import debug from 'debug'

import {
  readFileSync
} from 'node:fs'

import APP_SETTINGS_PATH from '#app-settings-path'

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

const APP_SETTINGS = JSON.parse(readFileSync(APP_SETTINGS_PATH))

export {
  hasAppSettingsForAppMode,
  getAppSettingsForAppMode
}

export default APP_SETTINGS
