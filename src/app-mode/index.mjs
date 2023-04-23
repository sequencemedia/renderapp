import debug from 'debug'

import {
  hasAppMode,
  getAppMode
} from '#args/app-mode'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:app-mode` is awake')

if (!hasAppMode()) throw Error('App Mode not provided')
const APP_MODE = getAppMode()

export default APP_MODE
