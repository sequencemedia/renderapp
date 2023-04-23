import debug from 'debug'

import {
  hasAppSettingsPath,
  getAppSettingsPath
} from '#args/app-settings-path'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:app-settings-path` is awake')

if (!hasAppSettingsPath()) throw new Error('App Settings path not provided')
const APP_SETTINGS_PATH = getAppSettingsPath()

export default APP_SETTINGS_PATH
