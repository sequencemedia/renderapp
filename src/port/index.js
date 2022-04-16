import debug from 'debug'

import {
  hasPort,
  getPort
} from '~/src/args/port'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:port` is awake')

if (!hasPort()) throw Error('Port not provided')
const PORT = getPort()

export default PORT
